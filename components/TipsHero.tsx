import Image from "next/image";

export function TipsHero() {
  return (
    <section className="tips-hero" aria-labelledby="tips-title">
      <div className="tips-copy">
        <p className="tips-pill">Recipe Tips</p>
        <h1 id="tips-title">
          Get better results from
          <span>every ingredient list.</span>
        </h1>
        <p>
          Small prompt improvements can make recipes more specific, faster,
          and easier to cook.
        </p>
      </div>

      <div className="tips-art" aria-hidden="true">
        <Image
          src="/tips-bg.png"
          width={900}
          height={514}
          alt=""
          priority
          sizes="(max-width: 760px) 100vw, 48vw"
        />
      </div>
    </section>
  );
}
