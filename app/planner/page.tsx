import { AppFooter } from "@/components/AppFooter";
import { AppNav } from "@/components/AppNav";
import { PlannerHero } from "@/components/PlannerHero";
import { PlannerTipBanner } from "@/components/PlannerTipBanner";
import { WeeklyPlanner } from "@/components/WeeklyPlanner";

export default function PlannerPage() {
  return (
    <main className="page-shell planner-page">
      <AppNav />
      <div className="page-content planner-page-content">
        <PlannerHero />
        <WeeklyPlanner />
        <PlannerTipBanner />
      </div>
      <AppFooter />
    </main>
  );
}
