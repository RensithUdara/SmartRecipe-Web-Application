<div align="center">
  <img src="./public/logo.png" alt="SmartRecipe logo" width="120" />

  # 🍝 SmartRecipe Web Application

  **Cook smarter. Waste less. Eat better.**

  SmartRecipe is a modern **Next.js + Gemini AI** recipe assistant that turns
  pantry ingredients into practical cooking ideas with preferences, history,
  favorites, shopping lists, and recipe export tools.

  ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Gemini](https://img.shields.io/badge/Gemini-AI-8E75B2?style=for-the-badge)
</div>

---

## ✨ Overview

SmartRecipe Web Application helps users generate recipes from ingredients they
already have at home. The app includes a polished dashboard-style interface,
recipe customization controls, local recipe history, favorites, smart pantry
suggestions, and useful recipe actions like copy, download, and print.

The backend is implemented as a **Next.js API route**, so no separate Python or
Express server is needed.

---

## 🚀 Key Features

- 🤖 **AI recipe generation** using Google Gemini
- 🥘 **Ingredient quick-pick chips** for faster input
- 🏷️ **Active ingredient tags** with one-click removal
- 🍽️ **Recipe preferences** for servings, time, cuisine, diet, difficulty, and meal type
- 🧠 **Smart pantry suggestions** to improve recipe quality
- 🛒 **Shopping checklist** generated from entered ingredients
- 📅 **Meal planner summary** for the current recipe
- 📊 **Lightweight nutrition estimate**
- 🕒 **Recent recipe history** saved in browser local storage
- ⭐ **Favorite recipes** saved locally
- 📋 **Copy recipe** to clipboard
- 📥 **Download recipe** as a text file
- 🖨️ **Print-friendly recipe view**
- 📱 **Responsive UI** for desktop, tablet, and mobile
- 🎨 **Custom logo support** using `public/logo.png`
- 🧭 **Multiple web pages** for About, Recipes, Planner, and Tips
- 🌗 **Full light and dark theme** with localStorage persistence

---

## 🖼️ Application UI

The interface includes:

- A top navigation bar with the SmartRecipe logo
- A hero section with food imagery
- A recipe generation workspace
- Preference controls for better AI results
- Recent recipes and favorites sidebar
- Tips card for better recipe prompts
- Preview panel for generated recipes

Main visual assets:

```text
public/logo.png
public/pasta.jpg
public/favicon.svg
```

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 |
| UI | React 19 |
| Language | TypeScript |
| Styling | CSS |
| Icons | lucide-react |
| AI API | Google Gemini |
| Storage | Browser localStorage |

---

## 📦 Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

---

## 🔐 Environment Setup

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.6-flash
```

You can also copy the example file:

```bash
cp .env.example .env
```

Then replace the placeholder key with your real Gemini API key.

> ⚠️ Never commit `.env` to GitHub. This project already ignores `.env` in
> `.gitignore`.

---

## 🧪 Available Scripts

```bash
npm run dev
```

Runs the local development server.

```bash
npm run build
```

Builds the production version and checks TypeScript validity.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs ESLint for code quality checks.

---

## 📁 Project Structure

```text
SmartRecipeAI-main/
  app/
    about/
      page.tsx
    api/
      generate-recipe/
        route.ts
    error.tsx
    globals.css
    layout.tsx
    loading.tsx
    not-found.tsx
    page.tsx
    planner/
      page.tsx
    recipes/
      page.tsx
    tips/
      page.tsx

  components/
    AppFooter.tsx
    AppNav.tsx
    FeatureGrid.tsx
    HeroSection.tsx
    IngredientManager.tsx
    MealPlanner.tsx
    NutritionEstimate.tsx
    PageHeader.tsx
    PantrySuggestions.tsx
    RecipeForm.tsx
    RecipePreview.tsx
    RecipeSidebar.tsx
    SampleRecipes.tsx
    SavedRecipesView.tsx
    ShoppingList.tsx
    ThemeScript.tsx
    WeeklyPlanner.tsx

  hooks/
    useTheme.ts
    useRecipeApp.ts

  lib/
    local-recipes.ts
    page-data.ts
    recipe-data.ts
    recipe-utils.ts
    theme.ts

  public/
    favicon.svg
    logo.png
    pasta.jpg

  types/
    recipe.ts

  .env.example
  .gitignore
  eslint.config.mjs
  next.config.mjs
  package.json
  tsconfig.json
```

---

## 🔌 API Route

Recipe generation is handled by:

```text
app/api/generate-recipe/route.ts
```

Request body:

```json
{
  "ingredients": ["rice", "egg", "onion"],
  "options": {
    "servings": 2,
    "maxTime": "30 minutes",
    "cuisine": "Any cuisine",
    "diet": "No preference",
    "difficulty": "Easy",
    "mealType": "Dinner"
  }
}
```

Successful response:

```json
{
  "message": "Success!",
  "ai_model_used": "models/gemini-3.6-flash",
  "recipe": "Generated recipe text..."
}
```

---

## 🧩 Main Components

| Component | Purpose |
| --- | --- |
| `AppNav.tsx` | Top navigation with logo |
| `PageHeader.tsx` | Shared header for secondary pages |
| `FeatureGrid.tsx` | Feature cards for the About page |
| `HeroSection.tsx` | Hero area and food image |
| `RecipeForm.tsx` | Ingredient input and recipe preferences |
| `IngredientManager.tsx` | Removable ingredient tags |
| `PantrySuggestions.tsx` | Suggested ingredients |
| `ShoppingList.tsx` | Ingredient checklist |
| `MealPlanner.tsx` | Current meal plan summary |
| `NutritionEstimate.tsx` | Estimated nutrition cards |
| `RecipePreview.tsx` | Generated recipe display and actions |
| `RecipeSidebar.tsx` | Recent recipes, favorites, and tips |
| `SavedRecipesView.tsx` | Full saved recipe library page |
| `ThemeScript.tsx` | Applies saved theme before page render |
| `WeeklyPlanner.tsx` | Full weekly planner page |
| `SampleRecipes.tsx` | Example recipe cards for the Tips page |
| `AppFooter.tsx` | Footer branding |

---

## 💾 Local Storage

The app stores data locally in the user&apos;s browser:

| Key | Stores |
| --- | --- |
| `recipeHistory` | Last generated recipes |
| `favoriteRecipes` | Saved favorite recipes |
| `smartRecipeTheme` | Selected light or dark theme |

No database is required for the current version.

---

## 🌗 Theme System

SmartRecipe includes a complete light/dark theme implementation:

- Theme toggle in the navigation bar
- Saved preference in `localStorage`
- Automatic first-load theme script to reduce flashing
- `data-theme="light"` and `data-theme="dark"` support on the `<html>` element
- CSS variables for backgrounds, cards, borders, text, fields, alerts, and shadows
- Print styles that stay clean regardless of selected theme

---

## ⚠️ Gemini API Notes

If the app shows a `403`, `429`, or billing-related error, the frontend is still
working. The issue is usually with the Gemini API key, project access, quota, or
billing status.

Common fixes:

- Create a new Gemini API key in Google AI Studio
- Check project billing or prepayment credits
- Confirm the key is saved in `.env`
- Restart the dev server after changing `.env`

---

## ✅ Current Status

- ✅ Full Next.js project
- ✅ Component-based UI
- ✅ Gemini API route
- ✅ Responsive design
- ✅ Local history and favorites
- ✅ Logo image integrated
- ✅ Lint and build ready

---

## 👨‍🍳 Made For

Home cooks, students, busy families, and anyone who wants to turn leftover
ingredients into quick meal ideas without wasting food.
