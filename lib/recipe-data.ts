import type { RecipeOptions } from "@/types/recipe";

export const HISTORY_KEY = "recipeHistory";
export const FAVORITES_KEY = "favoriteRecipes";

export const DEFAULT_OPTIONS: RecipeOptions = {
  servings: 2,
  maxTime: "30 minutes",
  cuisine: "Any cuisine",
  diet: "No preference",
  difficulty: "Easy",
};

export const QUICK_INGREDIENTS = [
  "Chicken",
  "Rice",
  "Egg",
  "Tomato",
  "Onion",
  "Potato",
  "Coconut milk",
  "Pasta",
  "Garlic",
  "Cheese",
];

export const CUISINE_OPTIONS = [
  "Any cuisine",
  "Sri Lankan",
  "Italian",
  "Indian",
  "Asian fusion",
  "Mediterranean",
];

export const DIET_OPTIONS = [
  "No preference",
  "Vegetarian",
  "High protein",
  "Low carb",
  "Dairy free",
  "Spicy",
];

export const TIME_OPTIONS = ["15 minutes", "30 minutes", "45 minutes", "1 hour"];

export const DIFFICULTY_OPTIONS = ["Easy", "Medium", "Creative"];
