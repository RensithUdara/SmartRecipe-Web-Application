import { AppFooter } from "@/components/AppFooter";
import { AppNav } from "@/components/AppNav";
import { PageHeader } from "@/components/PageHeader";
import { WeeklyPlanner } from "@/components/WeeklyPlanner";

export default function PlannerPage() {
  return (
    <main className="page-shell">
      <AppNav />
      <div className="page-content">
        <PageHeader
          eyebrow="Meal Planner"
          title="Plan a simple week of meals."
          description="Keep a lightweight weekly meal plan in your browser and use generated recipes to guide your cooking."
        />
        <WeeklyPlanner />
      </div>
      <AppFooter />
    </main>
  );
}
