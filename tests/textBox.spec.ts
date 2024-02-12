import test from "@playwright/test";
import { TexBoxPage } from "../pages/textbox-page";


const testData = {
    fullName: "John Doe",
    emailAddress: "test@mailinator.com",
    currentAddress: "Fake Street 123, MN",
    permanentAddress: "New Street 66"
  };

test("Submit a Text Box Form", async ({page}) => {
    const textboxPage = new TexBoxPage(page)
    await textboxPage.visitTextBoxPage()
    await textboxPage.submitTextBox(testData.fullName, testData.emailAddress, testData.currentAddress, testData.permanentAddress)
    await textboxPage.verifyResponseAfterSubmit(testData.fullName, testData.emailAddress, testData.currentAddress, testData.permanentAddress)
});


