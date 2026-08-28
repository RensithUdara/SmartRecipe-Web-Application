import Image from "next/image";
import { Clock3, FileText, Heart, Leaf, Sparkles, Zap } from "lucide-react";

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

      <div className="hero-art" aria-label="Pasta recipe preview">
        <p className="hand-note">Good Food Happier Days!</p>
        <Image
          className="pasta-image"
          src="/pasta.jpg"
          width={380}
          height={380}
          alt="A bowl of pasta with tomato sauce and herbs"
          priority
        />
        <Leaf className="floating-leaf" size={44} />
        <span className="accent-mark" aria-hidden="true" />

        <div className="feature-stack">
          <div>
            <Leaf size={22} />
            <span>Simple ingredients</span>
          </div>
          <div>
            <Zap size={22} />
            <span>Quick recipes</span>
          </div>
          <div>
            <Heart size={22} />
            <span>Delicious results</span>
          </div>
        </div>
      </div>
    </section>
  );
}
