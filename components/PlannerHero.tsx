import Image from "next/image";
import { CalendarDays, Clock3, Utensils } from "lucide-react";

const PLANNER_METRICS = [
  {
    label: "Stay organized",
    description: "Plan your week easily",
    icon: CalendarDays,
  },
  {
    label: "Eat healthier",
    description: "Better food choices",
    icon: Utensils,
  },
  {
    label: "Save time",
    description: "Quick meal ideas",
    icon: Clock3,
  },
];

export function PlannerHero() {
  return (
    <section className="planner-hero" aria-labelledby="planner-title">
      <div className="planner-copy">
        <p className="planner-pill">Meal Planner</p>
        <h1 id="planner-title">
          Plan a simple
          <span>week of meals.</span>
        </h1>
        <p>
          Keep a lightweight weekly meal plan in your browser and use generated
          recipes to guide your cooking.
        </p>

        <div className="planner-metrics" aria-label="Planner benefits">
          {PLANNER_METRICS.map((item) => {
            const Icon = item.icon;

            return (
              <div className="planner-metric" key={item.label}>
                <Icon size={24} />
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="planner-hero-art" aria-hidden="true">
        <Image
          src="/planner-bg.png"
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
