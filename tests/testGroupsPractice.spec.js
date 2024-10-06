import { expect, test } from '@playwright/test';

test.describe('@testgroup1 Test Group', () => {

    test.beforeEach(async({ page }) => {

        await page.goto('https://practice.cydeo.com/');

    });

    test.afterEach(async({ page }) => {


    });

  test('Getting the title of the page', async ({ page }) => {

    let actualTitle = await page.title();

    console.log(actualTitle);
  
    expect(actualTitle).toBe("Practice");
    
  });

  test('@lib01 Getting the current url of the page', async ({ page }) => {
    
    let currentUrl = page.url();

    console.log(currentUrl);
    
  });

});