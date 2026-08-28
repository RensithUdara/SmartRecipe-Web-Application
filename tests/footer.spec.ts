import { expect, test } from "@playwright/test";

test("footer stays after content with visible spacing", async ({ page }) => {
  await page.goto("/about");

  const spacing = await page.evaluate(() => {
    const content = document.querySelector(".page-content");
    const footer = document.querySelector(".footer");

    if (!content || !footer) {
      return -1;
    }

    const contentRect = content.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    return Math.round(footerRect.top - contentRect.bottom);
  });

  expect(spacing).toBeGreaterThanOrEqual(0);
  await expect(page.locator(".footer")).toBeVisible();
});
