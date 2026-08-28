import {
  CalendarDays,
  ClipboardList,
  Heart,
  Leaf,
  ListChecks,
  Printer,
  Sparkles,
  Timer,
} from "lucide-react";

export const FEATURE_CARDS = [
  {
    title: "AI recipe creation",
    description: "Generate structured recipes from the ingredients you already have.",
    icon: Sparkles,
  },
  {
    title: "Preference controls",
    description: "Tune servings, cuisine, diet, time, difficulty, and meal type.",
    icon: ClipboardList,
  },
  {
    title: "Local recipe library",
    description: "Save recent recipes and favorites directly in your browser.",
    icon: Heart,
  },
  {
    title: "Shopping checklist",
    description: "Turn your ingredient list into a quick interactive checklist.",
    icon: ListChecks,
  },
  {
    title: "Meal planning",
    description: "Plan simple meals for the week without needing a database.",
    icon: CalendarDays,
  },
  {
    title: "Recipe export",
    description: "Copy, download, or print recipes when you want to cook offline.",
    icon: Printer,
  },
];

export const COOKING_TIPS = [
  {
    title: "Use specific ingredients",
    description: "Chicken breast, red onion, basmati rice, and fresh tomato give better results than broad ingredient names.",
    icon: Leaf,
  },
  {
    title: "Add a time limit",
    description: "A 15 or 30 minute limit helps the AI choose practical cooking methods.",
    icon: Timer,
  },
  {
    title: "Mention diet needs",
    description: "Vegetarian, dairy free, high protein, spicy, and low carb requests change the recipe direction.",
    icon: ClipboardList,
  },
  {
    title: "Save good recipes",
    description: "Use favorites for recipes you want to repeat and history for recent experiments.",
    icon: Heart,
  },
];

export const SAMPLE_RECIPES = [
  {
    title: "Tomato Garlic Pasta",
    time: "25 min",
    tags: ["Italian", "Easy", "Dinner"],
    ingredients: "pasta, tomato, garlic, cheese, basil",
  },
  {
    title: "Sri Lankan Coconut Rice Bowl",
    time: "30 min",
    tags: ["Sri Lankan", "Comfort", "Lunch"],
    ingredients: "rice, coconut milk, onion, chili, egg",
  },
  {
    title: "Quick Egg Fried Rice",
    time: "15 min",
    tags: ["Quick", "Budget", "Dinner"],
    ingredients: "rice, egg, soy sauce, onion, carrot",
  },
];

export const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
