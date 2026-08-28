import { Activity, Flame, Gauge } from "lucide-react";
import type { RecipeRecord } from "@/types/recipe";
import { estimateNutrition } from "@/lib/recipe-utils";

type NutritionEstimateProps = {
  recipe: RecipeRecord | null;
};

export function NutritionEstimate({ recipe }: NutritionEstimateProps) {
  if (!recipe) {
    return null;
  }

  const estimate = estimateNutrition(recipe.ingredients, recipe.options.servings);

  return (
    <section className="mini-card nutrition-card">
      <h3>Nutrition estimate</h3>
      <div className="nutrition-grid">
        <div>
          <Flame size={18} />
          <strong>{estimate.calories}</strong>
          <span>cal/serving</span>
        </div>
        <div>
          <Activity size={18} />
          <strong>{estimate.protein}g</strong>
          <span>protein</span>
        </div>
        <div>
          <Gauge size={18} />
          <strong>{estimate.prepScore}%</strong>
          <span>prep fit</span>
        </div>
      </div>
    </section>
  );
}
