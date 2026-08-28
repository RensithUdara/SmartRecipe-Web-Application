"use client";

import { useEffect, useState } from "react";
import { applyTheme, getPreferredTheme, type ThemeMode } from "@/lib/theme";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
    applyTheme(preferredTheme);
  }, []);

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      return nextTheme;
    });
  }

  return {
    isDark: theme === "dark",
    theme,
    toggleTheme,
  };
}
