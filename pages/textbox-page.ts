import { expect, type Locator, type Page } from '@playwright/test';
import { TextBoxLocators } from '../locators/textbox-locators';

export class TexBoxPage {
  // Define Selectors
  readonly page: Page;
  readonly fullNameField: Locator;
  readonly emailAddressField: Locator;
  readonly currentAddressField: Locator;
  readonly permanentAddressField: Locator;
  readonly submitButton: Locator;
  readonly formName: Locator;
  readonly formEmail : Locator;
  readonly formCurrentAddress : Locator;
  readonly formPermanentAddress : Locator;

  constructor(page: Page) {
    // Initialize selectors using constructor
    this.page = page;
    this.fullNameField = page.locator(TextBoxLocators.fullNameField);
    this.emailAddressField = page.locator(TextBoxLocators.emailAddressField);
    this.currentAddressField = page.locator(TextBoxLocators.currentAddressField)
    this.permanentAddressField = page.locator(TextBoxLocators.permanentAddressField)
    this.submitButton = page.locator(TextBoxLocators.submitButton)
    this.formName = page.locator(TextBoxLocators.formName)
    this.formEmail = page.locator(TextBoxLocators.formEmail)
    this.formCurrentAddress = page.locator("#currentAddress").nth(1)
    this.formPermanentAddress = page.locator("#permanentAddress").nth(1)
  }


  // Define Methods
  async visitTextBoxPage() {
    await this.page.goto('https://demoqa.com/text-box');
    await expect(this.page).toHaveTitle(/DEMOQA/)
  }

  async submitTextBox(fullName: string, emailAddress: string, currentAddress: string, permanentAddress: string) {
    await this.fullNameField.fill(fullName);
    await this.emailAddressField.fill(emailAddress);
    await this.currentAddressField.fill(currentAddress)
    await this.permanentAddressField.fill(permanentAddress)
    await this.submitButton.click()
    await expect(this.formName).toContainText(fullName)
  }

  async verifyResponseAfterSubmit(fullName: string, emailAddress: string, currentAddress: string, permanentAddress: string){
    await expect(this.formName).toContainText(fullName)
    await expect(this.formEmail).toContainText(emailAddress)
    await expect(this.formCurrentAddress).toContainText(currentAddress)
    await expect(this.formPermanentAddress).toContainText(permanentAddress)
  }

}

