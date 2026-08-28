import type { RecipeOptions } from "@/types/recipe";

export const HISTORY_KEY = "recipeHistory";
export const FAVORITES_KEY = "favoriteRecipes";

export const DEFAULT_OPTIONS: RecipeOptions = {
  servings: 2,
  maxTime: "30 minutes",
  cuisine: "Any cuisine",
  diet: "No preference",
  difficulty: "Easy",
  mealType: "Dinner",
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

export const MEAL_TYPE_OPTIONS = ["Breakfast", "Lunch", "Dinner", "Snack"];

export const PANTRY_SUGGESTIONS = [
  { name: "Garlic", reason: "adds depth" },
  { name: "Lime", reason: "brightens flavors" },
  { name: "Chili flakes", reason: "adds heat" },
  { name: "Coconut milk", reason: "makes it creamy" },
  { name: "Soy sauce", reason: "adds umami" },
  { name: "Fresh herbs", reason: "finishes dishes well" },
];
