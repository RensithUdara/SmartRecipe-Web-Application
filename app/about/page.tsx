import { CheckCircle2, Lightbulb } from "lucide-react";
import { AboutHero } from "@/components/AboutHero";
import { AppFooter } from "@/components/AppFooter";
import { AppNav } from "@/components/AppNav";
import { FeatureGrid } from "@/components/FeatureGrid";

const BENEFITS = ["Less food waste", "Healthier choices", "Happier meals"];

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <AppNav />
      <div className="page-content about-content">
        <AboutHero />
        <FeatureGrid variant="about" />

        <section className="about-story-panel">
          <div className="story-icon">
            <Lightbulb size={36} />
          </div>

          <div className="story-copy">
            <h2>Why this app exists</h2>
            <p>
              We believe good food should be simple, accessible, and waste-free.
              SmartRecipe helps you make the most of what you have for a
              healthier you and a more sustainable tomorrow.
            </p>
          </div>

          <ul className="benefit-list" aria-label="SmartRecipe benefits">
            {BENEFITS.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2 size={18} />
                {benefit}
              </li>
            ))}
          </ul>

          <p className="story-note">Good Food Better You!</p>
        </section>
      </div>
      <AppFooter />
    </main>
  );
}
