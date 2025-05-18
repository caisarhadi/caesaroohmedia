// @ts-check
/**
 * @type {import('@storybook/test-runner').TestRunnerConfig}
 */
const config = {
  // Timeout for each story
  timeout: 10000,

  // Setting this option enables automatic snapshots for all stories
  // It will take screenshots and save them to the specified directory
  async postVisit(page, context) {
    // Check if we should skip this story's tests
    /** @type {boolean | undefined} */
    const skipSnapshots = context.story?.tags?.includes('no-snapshot');
    if (skipSnapshots) return;

    // First - light theme snapshot
    await page.evaluate(() => {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    });
    
    // Wait for theme change to take effect
    await page.waitForTimeout(300);
    
    // Take a screenshot for light theme
    const lightSnapshot = `${context.id}-light`;
    await page.screenshot({
      path: `__snapshots__/${lightSnapshot}.png`,
    });
    
    // Then - dark theme snapshot
    await page.evaluate(() => {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    });
    
    // Wait for theme change to take effect
    await page.waitForTimeout(300);
    
    // Take a screenshot for dark theme
    const darkSnapshot = `${context.id}-dark`;
    await page.screenshot({
      path: `__snapshots__/${darkSnapshot}.png`,
    });
  },
};

module.exports = config; 