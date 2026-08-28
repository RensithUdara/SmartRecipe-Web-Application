import {
  ArrowRight,
  ChefHat,
  List,
  SlidersHorizontal,
  Trash2,
  Wand2,
} from "lucide-react";
import {
  CUISINE_OPTIONS,
  DIET_OPTIONS,
  DIFFICULTY_OPTIONS,
  QUICK_INGREDIENTS,
  TIME_OPTIONS,
} from "@/lib/recipe-data";
import type { RecipeOptions } from "@/types/recipe";

type RecipeFormProps = {
  ingredients: string;
  ingredientCount: number;
  isLoading: boolean;
  options: RecipeOptions;
  onIngredientsChange: (value: string) => void;
  onOptionChange: <K extends keyof RecipeOptions>(
    key: K,
    value: RecipeOptions[K],
  ) => void;
  onQuickPick: (ingredient: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function RecipeForm({
  ingredients,
  ingredientCount,
  isLoading,
  options,
  onIngredientsChange,
  onOptionChange,
  onQuickPick,
  onSubmit,
}: RecipeFormProps) {
  return (
    <section className="workspace-card">
      <div className="section-heading">
        <div>
          <p className="section-label">
            <ChefHat size={18} />
            Recipe Workspace
          </p>
          <h2>What is in your kitchen?</h2>
          <p>
            Enter the ingredients you have, and we&apos;ll create a delicious
            recipe.
          </p>
        </div>
        <span className="count-pill">
          <Trash2 size={16} />
          {ingredientCount} items
        </span>
      </div>

      <form onSubmit={onSubmit} className="recipe-form">
        <label className="sr-only" htmlFor="ingredients">
          Ingredients
        </label>
        <div className="textarea-shell">
          <List size={20} />
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(event) => onIngredientsChange(event.target.value)}
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
                onClick={() => onQuickPick(ingredient)}
              >
                {ingredient}
              </button>
            ))}
          </div>
        </div>

        <div className="options-card">
          <p className="quick-title">
            <SlidersHorizontal size={16} />
            Recipe preferences
          </p>
          <div className="option-grid">
            <label>
              Servings
              <input
                min={1}
                max={12}
                type="number"
                value={options.servings}
                onChange={(event) =>
                  onOptionChange("servings", Number(event.target.value))
                }
              />
            </label>
            <label>
              Time
              <select
                value={options.maxTime}
                onChange={(event) => onOptionChange("maxTime", event.target.value)}
              >
                {TIME_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Cuisine
              <select
                value={options.cuisine}
                onChange={(event) => onOptionChange("cuisine", event.target.value)}
              >
                {CUISINE_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Diet
              <select
                value={options.diet}
                onChange={(event) => onOptionChange("diet", event.target.value)}
              >
                {DIET_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Difficulty
              <select
                value={options.difficulty}
                onChange={(event) =>
                  onOptionChange("difficulty", event.target.value)
                }
              >
                {DIFFICULTY_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <button className="primary-action" type="submit" disabled={isLoading}>
          <Wand2 size={19} />
          <span>{isLoading ? "Creating Recipe..." : "Generate Recipe"}</span>
          <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}
