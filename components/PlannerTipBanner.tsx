import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";

export function PlannerTipBanner() {
  return (
    <section className="planner-tip-banner" aria-label="Meal planner tip">
      <div className="planner-tip-icon">
        <Lightbulb size={34} />
      </div>
      <div>
        <h2>Tip</h2>
        <p>
          Use recipes from the Generator or Recipes section to quickly fill your
          meal plan.
        </p>
      </div>
      <Link className="soft-link-button" href="/recipes">
        Browse Recipes
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}
