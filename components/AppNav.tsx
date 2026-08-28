import Image from "next/image";
"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, CalendarDays, History, Home, Info, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Generator", icon: Home },
  { href: "/recipes", label: "Recipes", icon: History },
  { href: "/planner", label: "Planner", icon: CalendarDays },
  { href: "/tips", label: "Tips", icon: BookOpen },
  { href: "/about", label: "About", icon: Info },
];

export function AppNav() {
  const pathname = usePathname();

  return (
    <nav className="topbar" aria-label="Main navigation">
      <Link className="brand" href="/" aria-label="Smart Recipe AI home">
        <span className="brand-mark image-mark">
          <Image src="/logo.png" width={40} height={40} alt="" priority />
        </span>
        <span>Smart Recipe AI</span>
      </Link>

      <div className="nav-actions">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              className={`nav-pill ${isActive ? "active" : ""}`}
              href={item.href}
              key={item.href}
            >
              <Icon size={17} />
              <span>{item.label}</span>
            </Link>
          );
        })}
        <button className="icon-button" type="button" aria-label="Theme">
          <Sun size={18} />
        </button>
      </div>
    </nav>
  );
}
