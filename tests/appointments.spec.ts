import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';

test.describe('View Upcoming Appointments Tests', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, 'chandrashekhar.joshi@scriptassistinterview.com', 'fM8tSLCh_a?4');
  });

  test('View upcoming appointments', async ({ page }) => {
    await page.click('text="Upcoming Appointments"');
    const appointments = page.locator('.appointment-card');
    await expect(appointments).toHaveCount(0);
  });
});
