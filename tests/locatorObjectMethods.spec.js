import { test } from '@playwright/test';

test.describe('Test Group', () => {


test.beforeEach(async({page}) => {

    page.goto("https://practice.cydeo.com/");

});

test.afterEach(async({ page }) => {


});

  test('Check Method checks the radio methods and checkboxes if they havent been checked', async ({ page }) => {
    
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkBox1 = page.locator("#box1");

    await checkBox1.check();


  });

  test('Check Method unchecks the radio methods and checkboxes if they havent been unchecked', async ({ page }) => {
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkBox2 = page.locator("#box2");

    await checkBox2.uncheck();

  });

  test('selectOption() for ', async ({ page }) => {

    page.locator("text='Dropdown'").click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");

    //select by value
    //await simpleDropdown.selectOption("1");


    //select by visible text

    await simpleDropdown.selectOption({label:"Option 1"});

    //select by index
    //await simpleDropdown.selectOption({index:1});

  });

  test('innertext() retrieves VISIBLE text of the element', async ({ page }) => {

    let headerElement = page.locator("//span[@class='h1y']");

    console.log(await headerElement.innerText());

  });

  test('inputvalue(): only works with <input>,<textarea>,<select>', async ({ page }) => {

    let inputsLink = page.getByText("Inputs");

    //await inputsLink.scrollIntoViewIfNeeded();


    await inputsLink.click();

    let inputBox = page.locator("//input[@type='number']");

    await inputBox.fill("123");

    let inputValue = await inputBox.inputValue();

    console.log(inputValue);


  });

});