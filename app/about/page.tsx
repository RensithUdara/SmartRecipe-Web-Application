import { AppFooter } from "@/components/AppFooter";
import { AppNav } from "@/components/AppNav";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PageHeader } from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <AppNav />
      <div className="page-content">
        <PageHeader
          eyebrow="About SmartRecipe"
          title="A smarter way to cook from what you already have."
          description="SmartRecipe helps home cooks reduce waste, plan faster, and turn everyday pantry ingredients into useful meal ideas."
        />
        <FeatureGrid />
        <section className="story-panel">
          <h2>Why this app exists</h2>
          <p>
            Most recipe apps start with a finished dish. SmartRecipe starts with
            your kitchen. Add what you have, choose your preferences, and let the
            app suggest a practical recipe that fits your time, meal type, and
            taste.
          </p>
        </section>
      </div>
      <AppFooter />
    </main>
  );
}
