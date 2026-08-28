import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { SAMPLE_RECIPES } from "@/lib/page-data";

export function TipsExamples() {
  return (
    <section className="tips-examples" id="recipe-examples">
      <div className="examples-header">
        <div>
          <p className="tips-pill">Examples</p>
          <h2>
            Recipe ideas
            <span>you can try.</span>
          </h2>
          <p>Use these as inspiration when you are testing the generator.</p>
        </div>
        <Link className="soft-link-button" href="/recipes">
          View More Recipes
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="recipe-example-grid">
        {SAMPLE_RECIPES.map((recipe) => (
          <article className="recipe-example-card" key={recipe.title}>
            <Image
              src={recipe.image}
              width={150}
              height={150}
              alt={`${recipe.title} preview`}
              sizes="(max-width: 760px) 96px, 150px"
            />
            <div>
              <span className="recipe-time">
                <Clock3 size={15} />
                {recipe.time}
              </span>
              <h3>{recipe.title}</h3>
              <p>{recipe.ingredients}</p>
              <div className="example-tags">
                {recipe.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
