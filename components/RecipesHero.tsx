import Image from "next/image";

export function RecipesHero() {
  return (
    <section className="recipes-hero" aria-labelledby="recipes-title">
      <div className="recipes-copy">
        <p className="recipes-pill">Recipe Library</p>
        <h1 id="recipes-title">
          Your saved recipes
          <span>in one place.</span>
        </h1>
        <p>
          Browse recent generations, search by ingredients, download recipes,
          and manage favorites saved in your browser.
        </p>
      </div>

      <div className="recipes-hero-art" aria-hidden="true">
        <Image
          src="/recipes-bg.png"
          width={900}
          height={514}
          alt=""
          priority
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
