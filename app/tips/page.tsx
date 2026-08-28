import { AppFooter } from "@/components/AppFooter";
import { AppNav } from "@/components/AppNav";
import { ProTipBanner } from "@/components/ProTipBanner";
import { TipsExamples } from "@/components/TipsExamples";
import { TipsGrid } from "@/components/TipsGrid";
import { TipsHero } from "@/components/TipsHero";

export default function TipsPage() {
  return (
    <main className="page-shell tips-page">
      <AppNav />
      <div className="page-content tips-page-content">
        <TipsHero />
        <TipsGrid />
        <TipsExamples />
        <ProTipBanner />
      </div>
      <AppFooter />
    </main>
  );
}
