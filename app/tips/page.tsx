import { AppFooter } from "@/components/AppFooter";
import { AppNav } from "@/components/AppNav";
import { PageHeader } from "@/components/PageHeader";
import { SampleRecipes } from "@/components/SampleRecipes";
import { COOKING_TIPS } from "@/lib/page-data";

export default function TipsPage() {
  return (
    <main className="page-shell">
      <AppNav />
      <PageHeader
        eyebrow="Recipe Tips"
        title="Get better results from every ingredient list."
        description="Small prompt improvements can make recipes more specific, faster, and easier to cook."
      />
      <section className="feature-grid">
        {COOKING_TIPS.map((tip) => {
          const Icon = tip.icon;

          return (
            <article className="feature-card" key={tip.title}>
              <Icon size={26} />
              <h2>{tip.title}</h2>
              <p>{tip.description}</p>
            </article>
          );
        })}
      </section>
      <PageHeader
        eyebrow="Examples"
        title="Recipe ideas you can try."
        description="Use these as inspiration when you are testing the generator."
      />
      <SampleRecipes />
      <AppFooter />
    </main>
  );
}
