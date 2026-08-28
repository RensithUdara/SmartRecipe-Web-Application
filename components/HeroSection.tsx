import Image from "next/image";
import { Clock3, FileText, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">AI Recipe Maker</p>
        <h1>
          Turn the ingredients you already have <span>into dinner.</span>
        </h1>
        <p>
          Enter a few pantry items and get a simple, readable recipe with clear
          steps. Sinhala requests are supported too.
        </p>

        <div className="metric-grid" aria-label="Application highlights">
          <div className="metric-card red">
            <FileText size={26} />
            <div>
              <strong>10+</strong>
              <span>Saved recipes</span>
            </div>
          </div>
          <div className="metric-card blue">
            <Clock3 size={26} />
            <div>
              <strong>~1 min</strong>
              <span>Recipe ideas</span>
            </div>
          </div>
          <div className="metric-card purple">
            <Sparkles size={26} />
            <div>
              <strong>AI Powered</strong>
              <span>by Gemini</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-art" aria-label="Smart recipe generator preview">
        <Image
          className="generator-image"
          src="/generator-bg.png"
          width={1800}
          height={900}
          alt="Pasta bowl with Smart Recipe AI highlights for simple ingredients, quick recipes, and delicious results"
          priority
          sizes="(max-width: 760px) 100vw, 52vw"
        />
      </div>
    </section>
  );
}
