// Run with Playwright MCP browser_run_code_unsafe's filename argument.
// Start the app with npm.cmd run dev and navigate to its origin first.
async (page) => {
  const origin = await page.evaluate(() => window.location.origin);
  const routes = [
    "/projects/mpais/",
    "/projects/ea400/",
    "/ar/projects/mpais/",
    "/ar/projects/ea400/",
    "/tr/projects/mpais/",
    "/tr/projects/ea400/",
  ];
  const results = [];
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };

  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });

    for (const route of routes) {
      const response = await page.goto(`${origin}${route}`, {
        waitUntil: "networkidle",
      });
      assert(response?.status() === 200, `${route} should return HTTP 200`);
      assert(await page.locator("h1#project-detail-heading").count() === 1, `${route} has one project heading`);
      assert(await page.getByRole("link", { name: /portfolio|معرض|Portföy/i }).count() >= 1, `${route} has a localized back link`);
      assert(await page.locator("link[rel='canonical']").getAttribute("href").then((href) => href?.endsWith(route)), `${route} has the correct canonical URL`);
      assert(await page.locator("[aria-labelledby='project-overview-heading']").count() === 1, `${route} has an overview section`);
      assert(await page.locator("[aria-labelledby='project-highlights-heading'] li").count() > 0, `${route} has project highlights`);
      assert(await page.locator("[aria-labelledby='project-technologies-heading'] li").count() > 0, `${route} has technology tags`);
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
        ),
        `${route} fits the viewport without horizontal overflow`,
      );

      const structuredDataTypes = await page.locator("script[type='application/ld+json']").evaluateAll((scripts) =>
        scripts.map((script) => {
          try {
            return JSON.parse(script.textContent || "")["@type"];
          } catch {
            return null;
          }
        }),
      );
      assert(structuredDataTypes.includes("CreativeWork"), `${route} exposes project structured data`);
      results.push({ route, width, passed: true });
    }
  }

  return results;
}
