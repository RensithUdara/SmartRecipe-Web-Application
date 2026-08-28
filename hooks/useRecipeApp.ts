"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_OPTIONS,
  FAVORITES_KEY,
  HISTORY_KEY,
} from "@/lib/recipe-data";
import { readLocalList, writeLocalList } from "@/lib/local-recipes";
import {
  copyRecipe,
  createRecipeRecord,
  downloadRecipe,
  formatRecipe,
  getIngredientsList,
} from "@/lib/recipe-utils";
import type { RecipeOptions, RecipeRecord, RecipeResponse } from "@/types/recipe";

export function useRecipeApp() {
  const [ingredients, setIngredients] = useState("");
  const [currentRecipe, setCurrentRecipe] = useState<RecipeRecord | null>(null);
  const [history, setHistory] = useState<RecipeRecord[]>([]);
  const [favorites, setFavorites] = useState<RecipeRecord[]>([]);
  const [options, setOptions] = useState<RecipeOptions>(DEFAULT_OPTIONS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const ingredientCount = useMemo(
    () => getIngredientsList(ingredients).length,
    [ingredients],
  );
  const isFavorite = currentRecipe
    ? favorites.some((recipe) => recipe.id === currentRecipe.id)
    : false;

  useEffect(() => {
    setHistory(readLocalList<RecipeRecord>(HISTORY_KEY));
    setFavorites(readLocalList<RecipeRecord>(FAVORITES_KEY));
  }, []);

  function updateHistory(nextHistory: RecipeRecord[]) {
    setHistory(nextHistory);
    writeLocalList(HISTORY_KEY, nextHistory);
  }

  function updateFavorites(nextFavorites: RecipeRecord[]) {
    setFavorites(nextFavorites);
    writeLocalList(FAVORITES_KEY, nextFavorites);
  }

  function updateOption<K extends keyof RecipeOptions>(
    key: K,
    value: RecipeOptions[K],
  ) {
    setOptions((currentOptions) => ({
      ...currentOptions,
      [key]: value,
    }));
  }

  function addQuickIngredient(ingredient: string) {
    const currentItems = getIngredientsList(ingredients);

    if (currentItems.some((item) => item.toLowerCase() === ingredient.toLowerCase())) {
      return;
    }

    setIngredients([...currentItems, ingredient].join(", "));
  }

  function removeIngredient(ingredient: string) {
    const nextIngredients = getIngredientsList(ingredients).filter(
      (item) => item.toLowerCase() !== ingredient.toLowerCase(),
    );
    setIngredients(nextIngredients.join(", "));
  }

  async function generateRecipe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const ingredientsList = getIngredientsList(ingredients);

    if (ingredientsList.length === 0) {
      setError("Please enter at least one ingredient.");
      setCurrentRecipe(null);
      return;
    }

    setIsLoading(true);
    setError("");
    setNotice("");
    setCurrentRecipe(null);

    try {
      const response = await fetch("/api/generate-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients: ingredientsList, options }),
      });

      const data = (await response.json()) as RecipeResponse;

      if (!response.ok || !data.recipe) {
        setError(data.detail ?? "Could not generate a recipe right now.");
        return;
      }

      const record = createRecipeRecord(
        ingredients,
        formatRecipe(data.recipe),
        options,
      );

      setCurrentRecipe(record);
      updateHistory([record, ...history].slice(0, 10));
      setNotice("Recipe generated and saved to recent history.");
    } catch {
      setError("Network connection error.");
    } finally {
      setIsLoading(false);
    }
  }

  function showRecipe(recipe: RecipeRecord) {
    setCurrentRecipe(recipe);
    setIngredients(recipe.ingredients);
    setOptions(recipe.options);
    setError("");
    setNotice("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function clearHistory() {
    window.localStorage.removeItem(HISTORY_KEY);
    setHistory([]);
    setCurrentRecipe(null);
    setError("");
  }

  async function handleCopyRecipe() {
    if (!currentRecipe) {
      return;
    }

    await copyRecipe(currentRecipe.recipe);
    setNotice("Recipe copied to clipboard.");
  }

  function handleDownloadRecipe() {
    if (currentRecipe) {
      downloadRecipe(currentRecipe);
      setNotice("Recipe downloaded.");
    }
  }

  function handlePrintRecipe() {
    window.print();
  }

  function toggleFavorite() {
    if (!currentRecipe) {
      return;
    }

    if (isFavorite) {
      updateFavorites(favorites.filter((recipe) => recipe.id !== currentRecipe.id));
      setNotice("Removed from favorites.");
      return;
    }

    updateFavorites([currentRecipe, ...favorites].slice(0, 10));
    setNotice("Saved to favorites.");
  }

  return {
    addQuickIngredient,
    clearHistory,
    currentRecipe,
    error,
    favorites,
    generateRecipe,
    handleCopyRecipe,
    handleDownloadRecipe,
    handlePrintRecipe,
    history,
    ingredientCount,
    ingredients,
    isFavorite,
    isLoading,
    notice,
    options,
    removeIngredient,
    setIngredients,
    showRecipe,
    toggleFavorite,
    updateOption,
  };
}
