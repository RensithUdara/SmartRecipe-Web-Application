import Image from "next/image";
import { ChefHat, Sparkles } from "lucide-react";

export function AppLoading() {
  return (
    <main className="page-shell loading-shell">
      <section className="app-loading" aria-label="Loading Smart Recipe AI">
        <div className="loading-brand">
          <Image src="/logo.png" width={58} height={58} alt="" priority />
          <div>
            <strong>Smart Recipe AI</strong>
            <span>Preparing your kitchen...</span>
          </div>
        </div>

        <div className="loading-plate" aria-hidden="true">
          <span className="plate-ring" />
          <ChefHat size={48} />
          <span className="loading-spark one">
            <Sparkles size={18} />
          </span>
          <span className="loading-spark two">
            <Sparkles size={15} />
          </span>
          <span className="loading-spark three">
            <Sparkles size={13} />
          </span>
        </div>

        <div className="loading-copy">
          <h1>Cooking up the page</h1>
          <p>Gathering ingredients, recipes, and planner details.</p>
        </div>

        <div className="loading-progress" aria-hidden="true">
          <span />
        </div>
        <span className="sr-only">Loading</span>
      </section>
    </main>
  );
}
