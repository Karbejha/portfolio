// Run with Playwright MCP browser_run_code_unsafe's filename argument.
// Start the app with npm.cmd run dev and navigate to its origin first.
async (page) => {
  const origin = await page.evaluate(() => window.location.origin);
  const results = [];
  const hydrationErrors = [];
  const recordHydrationError = (message) => {
    if (message.type() === "error" && /hydrat/i.test(message.text())) {
      hydrationErrors.push(message.text());
    }
  };
  page.on("console", recordHydrationError);
  const locales = [
    { path: "/", more: "Show more projects", count: "Showing 6 of 11 projects" },
    { path: "/ar/", more: "عرض المزيد من المشاريع", count: "عرض 6 من أصل 11 مشروعًا" },
    { path: "/tr/", more: "Daha fazla proje göster", count: "11 projeden 6 tanesi gösteriliyor" },
  ];

  const checkCount = async (expected) => {
    await page.waitForFunction(
      (count) => document.querySelectorAll("#projects-list > li:not([hidden])").length === count,
      expected,
    );
  };
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };

  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: width === 390 ? "reduce" : "no-preference" });

    for (const locale of locales) {
      await page.goto(`${origin}${locale.path}`);
      const section = page.locator("#projects");
      const cards = page.locator("#projects-list > li");
      const filters = section.locator("button[aria-pressed]");
      const more = section.getByRole("button", { name: locale.more, exact: true });
      await checkCount(6);
      await more.scrollIntoViewIfNeeded();
      assert(await cards.count() === 11, "All projects must remain in the HTML");
      assert(await section.getByRole("status").textContent() === locale.count, "Localized initial count");
      assert(await cards.nth(6).isHidden(), "Unrevealed projects must be hidden");

      const originalTitles = await cards.locator("h3").allTextContents();
      await more.press("Enter");
      await checkCount(11);
      assert(await more.count() === 0, "Remove the button when all projects are visible");
      assert(await cards.nth(6).evaluate((card) => card === document.activeElement), "Focus the first newly revealed project");
      assert(JSON.stringify(await cards.locator("h3").allTextContents()) === JSON.stringify(originalTitles), "Preserve project order");
      await page.keyboard.press("Tab");
      assert(await cards.nth(6).evaluate((card) => card.contains(document.activeElement)), "Tab continues within the newly revealed card");

      // Re-selecting the active category preserves the expanded list.
      await filters.nth(0).click();
      await checkCount(11);
      // Switching even to a category with the same total resets the batch.
      await filters.nth(1).click();
      await checkCount(6);
      assert(await more.isVisible(), "Large categories offer more projects");
      // Small categories expose every result with no unnecessary button.
      for (const [filterIndex, expectedCount] of [[2, 3], [3, 1], [4, 1]]) {
        await filters.nth(filterIndex).click();
        await checkCount(expectedCount);
        assert(await more.count() === 0, "Small categories need no reveal button");
      }
      await filters.nth(0).click();
      await checkCount(6);
      assert(await section.getByRole("status").textContent() === locale.count, "Reset the count when returning to All");
      assert(await section.evaluate((element) => {
        const bounds = element.getBoundingClientRect();
        return bounds.left >= 0 && bounds.right <= window.innerWidth
          && element.scrollWidth <= element.clientWidth;
      }), "Projects section fits the viewport");
      results.push({ path: locale.path, width, passed: true });
    }
  }

  await page.emulateMedia({ reducedMotion: "no-preference" });
  page.off("console", recordHydrationError);
  assert(hydrationErrors.length === 0, "No hydration errors, including with reduced motion");
  return results;
}
