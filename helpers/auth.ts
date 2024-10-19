import { Page } from '@playwright/test';

export async function login(page: Page, email: string, password: string) {
  // Navigate to the login page
  await page.goto('https://demo-mobile.scriptassist.co.uk');
  
  // Wait until the email input is available and fill in the details
  await page.waitForSelector('//input[@type="email"]', { timeout: 50000 });

  await page.fill('//input[@type="email"]', email);
  
  // Wait until the password input is available and fill in the details
  await page.waitForSelector('//input[@type="password"]', { timeout: 50000 });
  await page.fill('//input[@type="password"]', password);
  
  // Click on submit button and wait for navigation
  await page.click('button[type="submit"]');
  
  // Wait for either success or failure message, adjust the selectors as needed
  // try {
  //   await page.waitForSelector('h3[type="Welcome,"]', { timeout: 50000 }); // Login success
  // }
  //  catch (error) {
  //   await page.waitForSelector('text="Invalid credentials"', { timeout: 50000 }); // Login failed
  // }
}
