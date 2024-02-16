import test from "@playwright/test";
import { WebTablePage } from "../pages/web-table-page"


const testData = {
    firstName: "John",
    lastName: "Doe",
    email: "test@mailinator.com",
    age: "66",
    salary: "4000",
    department: "QA"
  };

test("Proceed to WebTable site", async ({page}) => {
    const webtablepage = new WebTablePage(page)
    await webtablepage.visitWebTableSite()
});

test("Edit element one in webTable site", async ({page}) => {
    const webtablepage = new WebTablePage(page)
    await webtablepage.editFirstElement()
});

test("Add new record", async ({page}) => {
    const webtablepage = new WebTablePage(page)
    await webtablepage.addNewRecord(testData.firstName, testData.lastName, testData.email, testData.age, testData.salary, testData.department)
});




