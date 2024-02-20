import test from "@playwright/test";
import { WebTablePage } from "../pages/web-table-page"


const testData = {
    firstName: "John",
    lastName: "Doe",
    email: "test@mailinator.com",
    age: "66",
    salary: "4000",
    department: "QA",
    firstNameTwo: "Adam",
    lastNameTwo: "Baba",
    emailTwo: "testtwo@mailinator.com",
    ageTwo: "32",
    salaryTwo: "9000",
    departmentTwo: "QA Automation"
  };

test("Proceed to WebTable site", async ({page}) => {
    const webtablepage = new WebTablePage(page)
    await webtablepage.visitWebTableSite()
});

test("Edit element one in webTable site", async ({page}) => {
    const webtablepage = new WebTablePage(page)
    await webtablepage.editFirstElement()
});

test("Add two records and verify they were added", async ({page}) => {
    const webtablepage = new WebTablePage(page)
    await webtablepage.visitWebTableSite()
    await webtablepage.addNewRecord(testData.firstName, testData.lastName, testData.email, testData.age, testData.salary, testData.department)
    await webtablepage.addNewRecord(testData.firstNameTwo, testData.lastNameTwo, testData.emailTwo, testData.ageTwo, testData.salaryTwo, testData.departmentTwo)
    await webtablepage.verifyRecordWasAdded(testData.firstName)
    await webtablepage.verifyRecordWasAdded(testData.firstNameTwo)
    console.log("Test Complete")
});




