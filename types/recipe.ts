export type RecipeOptions = {
  servings: number;
  maxTime: string;
  cuisine: string;
  diet: string;
  difficulty: string;
  mealType: string;
};

export type RecipeRecord = {
  id: string;
  ingredients: string;
  recipe: string;
  createdAt: string;
  options: RecipeOptions;
};

export type RecipeResponse = {
  recipe?: string;
  detail?: string;
};

export type PantrySuggestion = {
  name: string;
  reason: string;
};
