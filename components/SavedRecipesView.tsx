"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, Heart, Search, Trash2 } from "lucide-react";
import { FAVORITES_KEY, HISTORY_KEY } from "@/lib/recipe-data";
import { readLocalList, writeLocalList } from "@/lib/local-recipes";
import { copyRecipe, downloadRecipe } from "@/lib/recipe-utils";
import type { RecipeRecord } from "@/types/recipe";

type RecipeTab = "history" | "favorites";

export function SavedRecipesView() {
  const [history, setHistory] = useState<RecipeRecord[]>([]);
  const [favorites, setFavorites] = useState<RecipeRecord[]>([]);
  const [activeTab, setActiveTab] = useState<RecipeTab>("history");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setHistory(readLocalList<RecipeRecord>(HISTORY_KEY));
    setFavorites(readLocalList<RecipeRecord>(FAVORITES_KEY));
  }, []);

  const recipes = activeTab === "history" ? history : favorites;
  const filteredRecipes = useMemo(
    () =>
      recipes.filter((recipe) =>
        recipe.ingredients.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, recipes],
  );

  function clearActiveList() {
    if (activeTab === "history") {
      setHistory([]);
      window.localStorage.removeItem(HISTORY_KEY);
      return;
    }

    setFavorites([]);
    window.localStorage.removeItem(FAVORITES_KEY);
  }

  function removeRecipe(recipeId: string) {
    if (activeTab === "history") {
      const nextHistory = history.filter((recipe) => recipe.id !== recipeId);
      setHistory(nextHistory);
      writeLocalList(HISTORY_KEY, nextHistory);
      return;
    }

    const nextFavorites = favorites.filter((recipe) => recipe.id !== recipeId);
    setFavorites(nextFavorites);
    writeLocalList(FAVORITES_KEY, nextFavorites);
  }

  return (
    <section className="library-panel">
      <div className="library-toolbar">
        <div className="tab-group" role="tablist" aria-label="Recipe library">
          <button
            className={activeTab === "history" ? "active" : ""}
            type="button"
            onClick={() => setActiveTab("history")}
          >
            History
          </button>
          <button
            className={activeTab === "favorites" ? "active" : ""}
            type="button"
            onClick={() => setActiveTab("favorites")}
          >
            Favorites
          </button>
        </div>

        <label className="search-box">
          <Search size={17} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search ingredients"
            type="search"
          />
        </label>

        <button className="clear-all solid" type="button" onClick={clearActiveList}>
          <Trash2 size={15} />
          Clear
        </button>
      </div>

      {filteredRecipes.length === 0 ? (
        <div className="empty-library">
          <Heart size={44} />
          <h2>No saved recipes found.</h2>
          <p>Generate recipes from the home page and save your favorites here.</p>
        </div>
      ) : (
        <div className="recipe-library-grid">
          {filteredRecipes.map((recipe) => (
            <article className="saved-recipe-card" key={recipe.id}>
              <div>
                <span>{recipe.options.mealType}</span>
                <h2>{recipe.ingredients}</h2>
                <p>
                  {recipe.options.servings} servings · {recipe.options.maxTime} ·{" "}
                  {recipe.options.cuisine}
                </p>
              </div>
              <div className="saved-actions">
                <button type="button" onClick={() => copyRecipe(recipe.recipe)}>
                  Copy
                </button>
                <button type="button" onClick={() => downloadRecipe(recipe)}>
                  <Download size={15} />
                  Download
                </button>
                <button type="button" onClick={() => removeRecipe(recipe.id)}>
                  <Trash2 size={15} />
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
