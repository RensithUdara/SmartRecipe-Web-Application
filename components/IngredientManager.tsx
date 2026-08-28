import { X } from "lucide-react";
import { getIngredientsList } from "@/lib/recipe-utils";

type IngredientManagerProps = {
  ingredients: string;
  onRemoveIngredient: (ingredient: string) => void;
};

export function IngredientManager({
  ingredients,
  onRemoveIngredient,
}: IngredientManagerProps) {
  const items = getIngredientsList(ingredients);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="ingredient-manager" aria-label="Selected ingredients">
      {items.map((ingredient) => (
        <button
          key={ingredient}
          type="button"
          onClick={() => onRemoveIngredient(ingredient)}
          aria-label={`Remove ${ingredient}`}
        >
          {ingredient}
          <X size={14} />
        </button>
      ))}
    </div>
  );
}
