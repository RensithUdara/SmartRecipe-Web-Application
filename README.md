# Smart Recipe AI

A full Next.js web app that generates recipes from pantry ingredients with
custom preferences, local recipe history, favorites, copy, download, and print
actions.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Features

- AI recipe generation through `app/api/generate-recipe/route.ts`
- Ingredient quick-pick chips
- Servings, cooking time, cuisine, diet, and difficulty controls
- Recent recipe history saved in local storage
- Favorite recipes saved in local storage
- Copy, download, and print actions for generated recipes
- Responsive dashboard-style UI

## Environment

Create a `.env` file with:

```env
GEMINI_API_KEY=your_gemini_api_key
```

The recipe API route lives at `app/api/generate-recipe/route.ts`.

## Project Structure

```text
app/
  api/generate-recipe/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  AppFooter.tsx
  AppNav.tsx
  HeroSection.tsx
  RecipeForm.tsx
  RecipePreview.tsx
  RecipeSidebar.tsx
lib/
  local-recipes.ts
  recipe-data.ts
  recipe-utils.ts
types/
  recipe.ts
public/
  pasta.jpg
  favicon.svg
```
