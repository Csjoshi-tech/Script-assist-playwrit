import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';

test.describe('Book Appointment Tests', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, 'chandrashekhar.joshi@scriptassistinterview.com', 'fM8tSLCh_a?4');
  });

  ('p[type="submit"]');

  test('Book an appointment', async ({ page }) => {
    await page.click('text="Book"');
    // await page.click('text="Book Appointment"');
    await page.click('text="Doctor/Nurse"');
    await page.fill('//input[@id="mantine-yo1fmuvlo"]', 'Dr. Smith');
    // await page.click('text="Next Available Slot"');
    // await page.click('button:has-text("Confirm")');
    // await expect(page.locator('text="Appointment Confirmed"')).toBeVisible();
  });
});
