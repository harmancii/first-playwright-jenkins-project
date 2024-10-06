import { test } from "@playwright/test";

test.describe("Test Group 1", () => {

    test.beforeAll( async () => {
        console.log("Before all tests in Test Group 1 are executed.");
    });

    test.afterAll( async () => {
        console.log("After all tests in Test Group 1 are executed.");
    });

    test.beforeEach( async () => {
        console.log("Before each test in Test Group 1 is executed.");
    } );

    test.afterEach( async () => {
        console.log("After each test in Test Group 1 is executed.");
    });
    
    test("Test Case 1", async ({ page }) => {
        console.log("Test Case 1 is executed.");
    });

    test("Test Case 2", async ({ page }) => {
        console.log("Test Case 2 is executed.");
    });

    test("Test Case 3", async ({ page }) => {
        console.log("Test Case 3 is executed.");
    });

 });