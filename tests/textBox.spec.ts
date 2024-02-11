import test, { expect } from "@playwright/test";
import { TexboxPage } from "../pages/textbox-page";
import exp from "constants";

test("Submit a Text Box Form", async ({page}) => {
    const textboxPage = new TexboxPage(page)
    await textboxPage.visitTextBoxPage()
    await textboxPage.submitTextBox("John Doe", "test@mailinator.com", "Fake Street 123, MN", "New Street 66")
    await textboxPage.verifyResponseAfterSubmit("John Doe", "test@mailinator.com", "Fake Street 123, MN", "New Street 66")
});


