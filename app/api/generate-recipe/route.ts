import { NextRequest, NextResponse } from "next/server";

type GenerateRecipeBody = {
  ingredients?: unknown;
};

const GEMINI_MODEL = process.env.GEMINI_MODEL ?? "gemini-3.6-flash";

function getModelPath() {
  return GEMINI_MODEL.startsWith("models/")
    ? GEMINI_MODEL
    : `models/${GEMINI_MODEL}`;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        detail:
          "Gemini API key is not configured. Add GEMINI_API_KEY to .env and restart the server.",
      },
      { status: 500 },
    );
  }

  let body: GenerateRecipeBody;

  try {
    body = (await request.json()) as GenerateRecipeBody;
  } catch {
    return NextResponse.json(
      { detail: "Request body must be valid JSON." },
      { status: 400 },
    );
  }
  const ingredients = Array.isArray(body.ingredients)
    ? body.ingredients.filter((item): item is string => typeof item === "string")
    : [];

  if (ingredients.length === 0) {
    return NextResponse.json(
      { detail: "Please provide at least one ingredient." },
      { status: 400 },
    );
  }

  const prompt = `
Create a short, delicious recipe using these ingredients: ${ingredients.join(", ")}.
IMPORTANT RULE: If the ingredients are provided in Sinhala, or if the user explicitly asks in Sinhala, write the entire recipe in Sinhala. Otherwise, write it in English.
Keep it simple and format it clearly.
`;

  const geminiResponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/${getModelPath()}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    },
  );

  const data = await geminiResponse.json();

  if (!geminiResponse.ok) {
    return NextResponse.json(
      {
        detail:
          data?.error?.message ??
          "Gemini could not generate a recipe right now.",
      },
      { status: geminiResponse.status },
    );
  }

  const recipe = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!recipe) {
    return NextResponse.json(
      { detail: "Gemini returned an empty recipe." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Success!",
    ai_model_used: getModelPath(),
    recipe,
  });
}
