import { FEATURE_CARDS } from "@/lib/page-data";

type FeatureGridProps = {
  variant?: "default" | "about";
};

export function FeatureGrid({ variant = "default" }: FeatureGridProps) {
  return (
    <section className={`feature-grid ${variant === "about" ? "about-feature-grid" : ""}`}>
      {FEATURE_CARDS.map((feature) => {
        const Icon = feature.icon;

        return (
          <article className="feature-card" key={feature.title}>
            <Icon size={26} />
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
            {variant === "about" ? <span className="feature-arrow">›</span> : null}
          </article>
        );
      })}
    </section>
  );
}
