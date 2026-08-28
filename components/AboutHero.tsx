import Image from "next/image";

export function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-copy">
        <p className="about-pill">About SmartRecipe</p>
        <h1>
          A smarter way to cook <span>from what you already have.</span>
        </h1>
        <p>
          SmartRecipe helps you turn simple ingredients into tasty meals with
          the power of AI. Less waste, more good food, and a healthier you.
        </p>
      </div>

      <div className="about-art" aria-label="SmartRecipe cooking board">
        <Image
          src="/about-bg.png"
          alt="Ingredients and a cutting board with better recipe tips"
          width={760}
          height={430}
          priority
        />
      </div>
    </section>
  );
}
