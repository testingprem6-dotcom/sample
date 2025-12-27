import { test } from '@playwright/test';
import LoginPage from '../pages/login.js'; // ✅ default import

test('example test using POM', async ({ page }) => {

  const loginPage1 = new LoginPage(page); // ✅ class name must match

  await loginPage1.navigate();
  await loginPage1.login('testingprem6@gmail.com', 'Prem#1234');
});
// Note: The above code demonstrates the correct usage of default imports and class naming conventions in a Playwright test using the Page Object Model (POM) pattern.