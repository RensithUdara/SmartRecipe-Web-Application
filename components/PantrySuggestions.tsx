import { Plus } from "lucide-react";
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
    <section className="mini-card">
      <h3>Smart add-ons</h3>
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
            <Plus size={16} />
          </button>
        ))}
      </div>
    </section>
  );
}
