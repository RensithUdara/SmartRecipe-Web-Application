# Smart Recipe AI

A Next.js web app that generates simple recipes from a comma-separated ingredient list.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Create a `.env` file with:

```env
GEMINI_API_KEY=your_gemini_api_key
```

The recipe API route lives at `app/api/generate-recipe/route.ts`.
