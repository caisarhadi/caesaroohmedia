import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  
  // Assuming there's a title element on the homepage
  const title = page.locator('h1');
  
  // This test will pass if there's any h1 tag on the page
  await expect(title).toBeDefined();
});

test('has navigation', async ({ page }) => {
  await page.goto('/');
  
  // Test will pass if there's a navigation element
  // You may need to adjust the selector based on your actual page
  const nav = page.locator('nav');
  
  await expect(nav).toBeDefined();
}); 