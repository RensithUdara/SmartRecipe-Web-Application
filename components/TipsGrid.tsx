import { ArrowRight } from "lucide-react";
import { COOKING_TIPS } from "@/lib/page-data";

export function TipsGrid() {
  return (
    <section className="tip-card-grid" aria-label="Recipe prompt tips">
      {COOKING_TIPS.map((tip) => {
        const Icon = tip.icon;

        return (
          <article className="tip-card" key={tip.title}>
            <Icon size={30} />
            <h2>{tip.title}</h2>
            <p>{tip.description}</p>
            <a href="#recipe-examples">
              Learn more
              <ArrowRight size={17} />
            </a>
          </article>
        );
      })}
    </section>
  );
}
