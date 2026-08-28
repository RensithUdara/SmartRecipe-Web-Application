"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChefHat,
  Clock3,
  FileText,
  Heart,
  History,
  Home as HomeIcon,
  Leaf,
  Lightbulb,
  List,
  Sparkles,
  Sun,
  Trash2,
  Wand2,
  Zap,
} from "lucide-react";

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

        <div className="nav-actions">
          <a className="nav-pill active" href="#generator">
            <HomeIcon size={17} />
            <span>Generator</span>
          </a>
          <a className="nav-pill" href="#history">
            <History size={17} />
            <span>History</span>
          </a>
          <button className="icon-button" type="button" aria-label="Theme">
            <Sun size={18} />
          </button>
        </div>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI Recipe Maker</p>
          <h1>
            Turn the ingredients you already have <span>into dinner.</span>
          </h1>
          <p>
            Enter a few pantry items and get a simple, readable recipe with
            clear steps. Sinhala requests are supported too.
          </p>

          <div className="metric-grid" aria-label="Application highlights">
            <div className="metric-card red">
              <FileText size={26} />
              <div>
                <strong>10+</strong>
                <span>Saved recipes</span>
              </div>
            </div>
            <div className="metric-card blue">
              <Clock3 size={26} />
              <div>
                <strong>~1 min</strong>
                <span>Recipe ideas</span>
              </div>
            </div>
            <div className="metric-card purple">
              <Sparkles size={26} />
              <div>
                <strong>AI Powered</strong>
                <span>by Gemini</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-label="Pasta recipe preview">
          <p className="hand-note">Good Food Happier Days!</p>
          <Image
            className="pasta-image"
            src="/pasta.jpg"
            width={380}
            height={380}
            alt="A bowl of pasta with tomato sauce and herbs"
            priority
          />
          <Leaf className="floating-leaf" size={44} />
          <span className="accent-mark" aria-hidden="true" />

          <div className="feature-stack">
            <div>
              <Leaf size={22} />
              <span>Simple ingredients</span>
            </div>
            <div>
              <Zap size={22} />
              <span>Quick recipes</span>
            </div>
            <div>
              <Heart size={22} />
              <span>Delicious results</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-grid" id="generator">
        <div className="main-column">
          <section className="workspace-card">
            <div className="section-heading">
              <div>
                <p className="section-label">
                  <ChefHat size={18} />
                  Recipe Workspace
                </p>
                <h2>What is in your kitchen?</h2>
                <p>
                  Enter the ingredients you have, and we&apos;ll create a
                  delicious recipe.
                </p>
              </div>
              <span className="count-pill">
                <Trash2 size={16} />
                {ingredientCount} items
              </span>
            </div>

            <form onSubmit={generateRecipe} className="recipe-form">
              <label className="sr-only" htmlFor="ingredients">
                Ingredients
              </label>
              <div className="textarea-shell">
                <List size={20} />
                <textarea
                  id="ingredients"
                  value={ingredients}
                  onChange={(event) => setIngredients(event.target.value)}
                  placeholder="Type ingredients separated by commas, e.g. chicken, onion, rice"
                  rows={4}
                />
              </div>

              <div>
                <p className="quick-title">Quick picks</p>
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
              </div>

              <button className="primary-action" type="submit" disabled={isLoading}>
                <Wand2 size={19} />
                <span>{isLoading ? "Creating Recipe..." : "Generate Recipe"}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </section>

          {isLoading ? (
            <div className="loading-card" role="status">
              <div className="loader" aria-hidden="true" />
              <span>Building a recipe from your ingredients...</span>
            </div>
          ) : null}

          {error ? <p className="error-message">{error}</p> : null}

          <section className="preview-card" aria-live="polite">
            <p className="section-label green">
              <BookOpen size={18} />
              Recipe Preview
            </p>
            {recipeHtml ? (
              <article
                className="recipe-output"
                dangerouslySetInnerHTML={{ __html: recipeHtml }}
              />
            ) : (
              <div className="empty-preview">
                <div>
                  <h3>Your generated recipe will appear here.</h3>
                  <p>
                    Add ingredients, choose quick picks, and generate a recipe
                    for a clean step-by-step cooking plan.
                  </p>
                </div>
                <div className="preview-sketch" aria-hidden="true">
                  <span className="pot" />
                  <span>Good Food Good Mood</span>
                </div>
              </div>
            )}
          </section>
        </div>

        <aside className="side-column">
          <section className="recent-card" id="history">
            <div className="side-heading">
              <h2>
                <Clock3 size={20} />
                Recent Recipes
              </h2>
              <button
                className="clear-all"
                type="button"
                onClick={clearHistory}
                disabled={history.length === 0}
              >
                <Trash2 size={15} />
                Clear all
              </button>
            </div>

            {history.length === 0 ? (
              <div className="empty-history">
                <BookOpen size={38} />
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
          </section>

          <section className="tips-card">
            <h2>
              <Lightbulb size={20} />
              Tips for better recipes
            </h2>
            <ul>
              <li>
                <CheckCircle2 size={17} />
                Add 3-8 ingredients for best results
              </li>
              <li>
                <CheckCircle2 size={17} />
                Be specific, e.g. chicken breast instead of chicken
              </li>
              <li>
                <CheckCircle2 size={17} />
                You can use Sinhala for ingredient names
              </li>
            </ul>
          </section>
        </aside>
      </section>

      <footer className="footer">
        <div>
          <strong>Smart Recipe AI</strong>
          <span>Cook smarter. Waste less. Eat better.</span>
        </div>
        <span>Powered by Gemini</span>
      </footer>
    </main>
  );
}
