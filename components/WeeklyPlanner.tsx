"use client";

import { useEffect, useState } from "react";
import { CalendarDays, PlusCircle, Save, Trash2 } from "lucide-react";
import { WEEK_DAYS } from "@/lib/page-data";

const PLANNER_KEY = "weeklyMealPlan";

type WeeklyPlan = Record<string, string>;

const DAY_TONES = ["red", "orange", "green", "blue", "purple", "orange", "red"];

function getWeekDates() {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  });
  const today = new Date();
  const mondayOffset = (today.getDay() + 6) % 7;
  const monday = new Date(today);
  monday.setDate(today.getDate() - mondayOffset);

  return WEEK_DAYS.map((_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return formatter.format(date);
  });
}

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
    <section className="weekly-planner-card">
      <div className="weekly-planner-heading">
        <div className="weekly-planner-title">
          <CalendarDays size={28} />
          <div>
            <h2>Weekly Meal Planner</h2>
            <p>Add meal ideas for each day or use generated recipes to build your plan.</p>
          </div>
        </div>
        <div className="planner-actions">
          <button type="button" onClick={clearPlan}>
            <Trash2 size={16} />
            Clear All
          </button>
          <button type="button" onClick={savePlan}>
            <Save size={16} />
            Save Plan
          </button>
        </div>
      </div>

      {saved ? <p className="notice-message">Weekly meal plan saved locally.</p> : null}

      <div className="weekly-planner-grid">
        {WEEK_DAYS.map((day, index) => (
          <label className={`weekly-day-card tone-${DAY_TONES[index]}`} key={day}>
            <span>{day}</span>
            <small>{getWeekDates()[index]}</small>
            <div className="meal-input-shell">
              <PlusCircle size={24} />
              <input
                value={plan[day] ?? ""}
                onChange={(event) => updateDay(day, event.target.value)}
                placeholder="Add meal idea"
              />
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}
