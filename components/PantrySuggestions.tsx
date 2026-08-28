import { Plus, Sparkles } from "lucide-react";
import { PANTRY_SUGGESTIONS } from "@/lib/recipe-data";
import { getIngredientsList } from "@/lib/recipe-utils";

type PantrySuggestionsProps = {
  ingredients: string;
  onAddIngredient: (ingredient: string) => void;
};

export function PantrySuggestions({
  ingredients,
  onAddIngredient,
}: PantrySuggestionsProps) {
  const selected = getIngredientsList(ingredients).map((item) => item.toLowerCase());
  const suggestions = PANTRY_SUGGESTIONS.filter(
    (suggestion) => !selected.includes(suggestion.name.toLowerCase()),
  ).slice(0, 4);

  return (
    <section className="mini-card addon-card">
      <div className="mini-card-heading">
        <span className="mini-icon red">
          <Sparkles size={18} />
        </span>
        <div>
          <h3>Smart add-ons</h3>
          <p>Boost flavor with one tap.</p>
        </div>
      </div>
      <div className="suggestion-list">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.name}
            type="button"
            onClick={() => onAddIngredient(suggestion.name)}
          >
            <span>
              <strong>{suggestion.name}</strong>
              {suggestion.reason}
            </span>
            <span className="add-chip" aria-hidden="true">
              <Plus size={15} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
