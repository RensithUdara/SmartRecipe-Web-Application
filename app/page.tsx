"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type HistoryItem = {
  ingredients: string;
  recipe: string;
};

type RecipeResponse = {
  recipe?: string;
  detail?: string;
};

const HISTORY_KEY = "recipeHistory";
const QUICK_INGREDIENTS = [
  "Chicken",
  "Rice",
  "Egg",
  "Tomato",
  "Onion",
  "Potato",
  "Coconut milk",
  "Pasta",
];

function formatRecipe(recipe: string) {
  return recipe
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/\n/g, "<br>");
}

export default function Home() {
  const [ingredients, setIngredients] = useState("");
  const [recipeHtml, setRecipeHtml] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const ingredientCount = useMemo(
    () => ingredients.split(",").filter((item) => item.trim()).length,
    [ingredients],
  );

  useEffect(() => {
    const savedHistory = window.localStorage.getItem(HISTORY_KEY);

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  function saveHistory(nextHistory: HistoryItem[]) {
    setHistory(nextHistory);
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(nextHistory));
  }

  function addQuickIngredient(ingredient: string) {
    const currentItems = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (currentItems.some((item) => item.toLowerCase() === ingredient.toLowerCase())) {
      return;
    }

    setIngredients([...currentItems, ingredient].join(", "));
  }

  async function generateRecipe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const ingredientsList = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (ingredientsList.length === 0) {
      setError("Please enter at least one ingredient.");
      setRecipeHtml("");
      return;
    }

    setIsLoading(true);
    setError("");
    setRecipeHtml("");

    try {
      const response = await fetch("/api/generate-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients: ingredientsList }),
      });

      const data = (await response.json()) as RecipeResponse;

      if (!response.ok || !data.recipe) {
        setError(data.detail ?? "Could not generate a recipe right now.");
        return;
      }

      const formattedRecipe = formatRecipe(data.recipe);
      setRecipeHtml(formattedRecipe);
      saveHistory([{ ingredients, recipe: formattedRecipe }, ...history].slice(0, 10));
    } catch {
      setError("Network connection error.");
    } finally {
      setIsLoading(false);
    }
  }

  function showHistoryItem(item: HistoryItem) {
    setRecipeHtml(item.recipe);
    setIngredients(item.ingredients);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function clearHistory() {
    window.localStorage.removeItem(HISTORY_KEY);
    setHistory([]);
    setRecipeHtml("");
    setError("");
  }

  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Smart Recipe AI home">
          <span className="brand-mark">S</span>
          <span>Smart Recipe AI</span>
        </a>
        <div className="topbar-links">
          <a href="#generator">Generator</a>
          <a href="#history">History</a>
        </div>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI recipe maker</p>
          <h1>Turn the ingredients you already have into dinner.</h1>
          <p>
            Enter a few pantry items and get a simple, readable recipe with
            clear steps. Sinhala requests are supported too.
          </p>
        </div>
        <div className="hero-stats" aria-label="Application highlights">
          <div>
            <strong>10</strong>
            <span>saved recipes</span>
          </div>
          <div>
            <strong>1 min</strong>
            <span>recipe ideas</span>
          </div>
          <div>
            <strong>AI</strong>
            <span>powered by Gemini</span>
          </div>
        </div>
      </section>

      <section className="workspace" id="generator">
        <div className="generator-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Recipe workspace</p>
              <h2>What is in your kitchen?</h2>
            </div>
            <span className="ingredient-count">{ingredientCount} items</span>
          </div>

          <form onSubmit={generateRecipe} className="recipe-form">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
              placeholder="Type ingredients separated by commas, e.g. chicken, onion, rice"
              rows={5}
            />

            <div className="quick-picks" aria-label="Quick ingredient picks">
              {QUICK_INGREDIENTS.map((ingredient) => (
                <button
                  key={ingredient}
                  type="button"
                  onClick={() => addQuickIngredient(ingredient)}
                >
                  {ingredient}
                </button>
              ))}
            </div>

            <button className="primary-action" type="submit" disabled={isLoading}>
              {isLoading ? "Creating Recipe..." : "Generate Recipe"}
            </button>
          </form>

          {isLoading ? (
            <div className="loading-card" role="status">
              <div className="loader" aria-hidden="true" />
              <span>Building a recipe from your ingredients...</span>
            </div>
          ) : null}

          {error ? <p className="error-message">{error}</p> : null}

          <article className="result-panel" aria-live="polite">
            {recipeHtml ? (
              <div dangerouslySetInnerHTML={{ __html: recipeHtml }} />
            ) : (
              <div className="empty-result">
                <span>Recipe Preview</span>
                <h3>Your generated recipe will appear here.</h3>
                <p>
                  Add ingredients, choose quick picks, and generate a recipe for
                  a clean step-by-step cooking plan.
                </p>
              </div>
            )}
          </article>
        </div>

        <aside className="history-panel" id="history" aria-label="Recent recipes">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Saved locally</p>
              <h2>Recent Recipes</h2>
            </div>
            <button
              className="clear-btn"
              type="button"
              onClick={clearHistory}
              disabled={history.length === 0}
            >
              Clear
            </button>
          </div>

          {history.length === 0 ? (
            <div className="empty-history">
              <h3>No recent recipes yet.</h3>
              <p>Your last 10 generated recipes will appear here.</p>
            </div>
          ) : (
            <div className="history-list">
              {history.map((item, index) => (
                <button
                  className="history-item"
                  type="button"
                  key={`${item.ingredients}-${index}`}
                  onClick={() => showHistoryItem(item)}
                >
                  <span>Recipe {index + 1}</span>
                  <strong>{item.ingredients}</strong>
                </button>
              ))}
            </div>
          )}
        </aside>
      </section>
    </main>
  );
}
