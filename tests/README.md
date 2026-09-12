Run `npm.cmd run lint` for static checks.

For the project reveal regression checks, start `npm.cmd run dev`, navigate to the local app with Playwright MCP, then call `browser_run_code_unsafe` with the absolute path to `tests/projects-pagination.browser.js` as `filename`.

The browser checks cover all three languages at desktop and mobile widths, initial counts, keyboard activation and focus, the final partial batch, project order, category resets, small categories, and horizontal overflow. Mobile runs with reduced motion enabled. Expected totals reflect the current 11-project collection; update them when the content changes.
