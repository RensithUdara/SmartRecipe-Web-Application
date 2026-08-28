import { FEATURE_CARDS } from "@/lib/page-data";

export function FeatureGrid() {
  return (
    <section className="feature-grid">
      {FEATURE_CARDS.map((feature) => {
        const Icon = feature.icon;

        return (
          <article className="feature-card" key={feature.title}>
            <Icon size={26} />
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        );
      })}
    </section>
  );
}
