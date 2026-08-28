import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";

export function ProTipBanner() {
  return (
    <section className="pro-tip-banner" aria-label="Pro tip">
      <div className="pro-tip-icon">
        <Lightbulb size={42} />
      </div>
      <div>
        <h2>Pro Tip</h2>
        <p>
          Combine multiple tips for even better results. For example, try:
          <em> &quot;15 minute vegetarian high-protein dinner with rice.&quot;</em>
        </p>
      </div>
      <Link className="soft-link-button" href="/">
        Try the Generator
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}
