"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Save } from "lucide-react";
import { WEEK_DAYS } from "@/lib/page-data";

const PLANNER_KEY = "weeklyMealPlan";

type WeeklyPlan = Record<string, string>;

export function WeeklyPlanner() {
  const [plan, setPlan] = useState<WeeklyPlan>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedPlan = window.localStorage.getItem(PLANNER_KEY);
    if (storedPlan) {
      setPlan(JSON.parse(storedPlan) as WeeklyPlan);
    }
  }, []);

  function updateDay(day: string, value: string) {
    setSaved(false);
    setPlan((currentPlan) => ({
      ...currentPlan,
      [day]: value,
    }));
  }

  function savePlan() {
    window.localStorage.setItem(PLANNER_KEY, JSON.stringify(plan));
    setSaved(true);
  }

  function clearPlan() {
    setPlan({});
    setSaved(false);
    window.localStorage.removeItem(PLANNER_KEY);
  }

  return (
    <section className="planner-panel">
      <div className="side-heading planner-heading">
        <h2>
          <CalendarDays size={22} />
          Weekly Meal Planner
        </h2>
        <div className="planner-actions">
          <button type="button" onClick={clearPlan}>
            Clear
          </button>
          <button type="button" onClick={savePlan}>
            <Save size={16} />
            Save Plan
          </button>
        </div>
      </div>

      {saved ? <p className="notice-message">Weekly meal plan saved locally.</p> : null}

      <div className="planner-grid">
        {WEEK_DAYS.map((day) => (
          <label className="planner-day" key={day}>
            <span>{day}</span>
            <input
              value={plan[day] ?? ""}
              onChange={(event) => updateDay(day, event.target.value)}
              placeholder="Add meal idea"
            />
          </label>
        ))}
      </div>
    </section>
  );
}
