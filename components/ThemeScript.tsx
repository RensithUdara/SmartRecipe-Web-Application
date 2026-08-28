import { THEME_STORAGE_KEY } from "@/lib/theme";

export function ThemeScript() {
  const code = `
    (function () {
      try {
        var storedTheme = window.localStorage.getItem("${THEME_STORAGE_KEY}");
        var theme = storedTheme === "light" || storedTheme === "dark"
          ? storedTheme
          : window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (_) {
        document.documentElement.dataset.theme = "light";
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
