import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';

test.describe('Login Tests', () => {
  
  // Test for valid credentials
  test('Login with valid credentials', async ({ page }) => {
    await login(page, 'chandrashekhar.joshi@scriptassistinterview.com', 'fM8tSLCh_a?4');
    // Expect a welcome message after a successful login
    //await expect(page.locator('text="Welcome"')).toBeVisible();
  });

  // Test for invalid credentials
  test('Login with invalid credentials', async ({ page }) => {
    await login(page, 'invalid_email@example.com', 'wrong_password');
    // Expect an invalid credentials error message
   // await expect(page.locator('text="Invalid credentials"')).toBeVisible();
  });
});
