import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';

test.describe('Cancel Appointment Tests', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, 'chandrashekhar.joshi@scriptassistinterview.com', 'fM8tSLCh_a?4');
  });

  test('Cancel an upcoming appointment', async ({ page }) => {
    await page.click('text="Upcoming Appointments"');
    await page.click('.appointment-card >> text="Cancel"');
    await page.click('button:has-text("Yes, cancel")');
    await expect(page.locator('text="Appointment Canceled"')).toBeVisible();
  });
});
