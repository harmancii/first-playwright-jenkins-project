import { expect, test } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {
                                 
  await page.goto('https://practice.cydeo.com/');

  let actualTitle = await page.title();

  console.log(actualTitle);

  expect(actualTitle).toBe("Practice");


});

test('Getting the current url of the page', async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

    let currentUrl = page.url();

    console.log(currentUrl);

  });


  test('Set the window size', async ({ page }) => {

    await page.setViewportSize({width:1400, height:750});
    
    await page.goto("https://practice.cydeo.com/");




  });