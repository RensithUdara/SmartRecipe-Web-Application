import Link from "next/link";
import { ArrowRight, CalendarDays, PlusCircle } from "lucide-react";
import type { RecipeRecord } from "@/types/recipe";
import { getMealPlanLabel } from "@/lib/recipe-utils";

type MealPlannerProps = {
  recipe: RecipeRecord | null;
};

export function MealPlanner({ recipe }: MealPlannerProps) {
  return (
    <section className="mini-card meal-card">
      <div className="mini-card-heading">
        <span className="mini-icon green">
          <CalendarDays size={18} />
        </span>
        <div>
          <h3>Meal planner</h3>
          <p>Keep today ready.</p>
        </div>
      </div>
      {recipe ? (
        <div className="meal-plan">
          <span>{getMealPlanLabel()}</span>
          <strong>{recipe.options.mealType}</strong>
          <p>{recipe.ingredients}</p>
        </div>
      ) : (
        <div className="meal-empty-state">
          <PlusCircle size={34} />
          <p>Generate a recipe to add it to today&apos;s plan.</p>
          <Link href="/planner">
            Open Planner
            <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </section>
  );
}
