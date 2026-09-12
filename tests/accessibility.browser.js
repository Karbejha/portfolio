// Run with Playwright MCP browser_run_code_unsafe's filename argument.
// Start the app with npm.cmd run dev and navigate to its origin first.
async (page) => {
  const origin = await page.evaluate(() => window.location.origin);
  const routes = ["/", "/ar/", "/tr/"];
  const results = [];
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };

  for (const route of routes) {
    await page.goto(`${origin}${route}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(100);
    const skipLink = page.locator("a[href='#main-content']").first();
    const tabs = page.locator("[role='tab']");

    assert(await skipLink.count() === 1, `${route} exposes a skip link`);
    assert((await skipLink.getAttribute("href")) === "#main-content", `${route} skip link targets main content`);
    assert(await tabs.count() === 3, `${route} exposes the About tabs`);
    assert(await tabs.nth(0).getAttribute("tabindex") === "0", `${route} keeps the active tab in the tab order`);
    assert(
      JSON.stringify(await tabs.evaluateAll((elements) => elements.slice(1).map((element) => element.tabIndex))) ===
        JSON.stringify([-1, -1]),
      `${route} uses roving tab focus`,
    );

    await tabs.nth(0).press("ArrowDown");
    await page.waitForFunction(() => document.activeElement?.id === "education-tab");
    assert(await page.evaluate(() => document.activeElement?.id === "education-tab"), `${route} supports arrow-key tab navigation`);
    assert(await page.locator("#education-tab").getAttribute("aria-selected") === "true", `${route} selects the keyboard target`);

    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
      ),
      `${route} has no horizontal overflow`,
    );
    results.push({ route, passed: true });
  }

  return results;
}
