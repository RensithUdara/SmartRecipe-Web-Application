import type { RecipeOptions, RecipeRecord } from "@/types/recipe";

export function getIngredientsList(ingredients: string) {
  return ingredients
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function formatRecipe(recipe: string) {
  return recipe
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/\n/g, "<br>");
}

export function createRecipeRecord(
  ingredients: string,
  recipe: string,
  options: RecipeOptions,
): RecipeRecord {
  return {
    id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`,
    ingredients,
    recipe,
    options,
    createdAt: new Date().toISOString(),
  };
}

export function downloadRecipe(record: RecipeRecord) {
  const plainRecipe = record.recipe.replace(/<br>/g, "\n").replace(/<\/?b>/g, "");
  const file = new Blob(
    [
      `Smart Recipe AI\n\nIngredients: ${record.ingredients}\nServings: ${record.options.servings}\nTime: ${record.options.maxTime}\nCuisine: ${record.options.cuisine}\nDiet: ${record.options.diet}\nDifficulty: ${record.options.difficulty}\n\n${plainRecipe}`,
    ],
    { type: "text/plain" },
  );
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "smart-recipe.txt";
  link.click();
  URL.revokeObjectURL(url);
}

export function copyRecipe(recipe: string) {
  const plainRecipe = recipe.replace(/<br>/g, "\n").replace(/<\/?b>/g, "");
  return navigator.clipboard.writeText(plainRecipe);
}
