import { CalendarDays } from "lucide-react";
import type { RecipeRecord } from "@/types/recipe";
import { getMealPlanLabel } from "@/lib/recipe-utils";

type MealPlannerProps = {
  recipe: RecipeRecord | null;
};

export function MealPlanner({ recipe }: MealPlannerProps) {
  return (
    <section className="mini-card meal-card">
      <h3>
        <CalendarDays size={18} />
        Meal planner
      </h3>
      {recipe ? (
        <div className="meal-plan">
          <span>{getMealPlanLabel()}</span>
          <strong>{recipe.options.mealType}</strong>
          <p>{recipe.ingredients}</p>
        </div>
      ) : (
        <p className="muted-copy">Generate a recipe to add it to today&apos;s plan.</p>
      )}
    </section>
  );
}
