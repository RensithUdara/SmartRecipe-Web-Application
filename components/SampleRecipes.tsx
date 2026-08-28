import { SAMPLE_RECIPES } from "@/lib/page-data";

export function SampleRecipes() {
  return (
    <section className="recipe-library-grid">
      {SAMPLE_RECIPES.map((recipe) => (
        <article className="saved-recipe-card" key={recipe.title}>
          <div>
            <span>{recipe.time}</span>
            <h2>{recipe.title}</h2>
            <p>{recipe.ingredients}</p>
          </div>
          <div className="tag-row">
            {recipe.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
