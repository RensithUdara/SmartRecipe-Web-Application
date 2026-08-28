import { expect, test } from "@playwright/test";

test("theme toggle switches between light and dark and persists", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", /light|dark/);

  await page.evaluate(() => {
    window.localStorage.setItem("smartRecipeTheme", "light");
    document.documentElement.dataset.theme = "light";
    document.documentElement.style.colorScheme = "light";
  });
  await page.reload();

  const lightBackground = await page
    .locator("body")
    .evaluate((body) => getComputedStyle(body).backgroundImage);

  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect
    .poll(() => page.evaluate(() => window.localStorage.getItem("smartRecipeTheme")))
    .toBe("dark");

  const darkBackground = await page
    .locator("body")
    .evaluate((body) => getComputedStyle(body).backgroundImage);

  expect(darkBackground).not.toBe(lightBackground);

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});
