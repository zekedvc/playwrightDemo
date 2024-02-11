import { expect, type Locator, type Page } from '@playwright/test';
import exp from 'constants';

export class TexboxPage {
  readonly page: Page;
  readonly fullNameField: Locator;
  readonly emailAddressField: Locator;
  readonly currentAddressField: Locator;
  readonly permanentAddressField: Locator;
  readonly submitButton: Locator;
  readonly formName: Locator;
  readonly formMail : Locator;
  readonly formCurrentAddress : Locator;
  readonly formPermanentAddress : Locator;


  constructor(page: Page) {
    this.page = page;
    this.fullNameField = page.locator("#userName");
    this.emailAddressField = page.locator("#userEmail");
    this.currentAddressField = page.locator("#currentAddress")
    this.permanentAddressField = page.locator("#permanentAddress")
    this.submitButton = page.locator("#submit")
    this.formName = page.locator("#name")
    this.formMail = page.locator("#email")
    this.formCurrentAddress = page.locator("#currentAddress").nth(1)
    this.formPermanentAddress = page.locator("#permanentAddress").nth(1)
  }

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
    await expect(this.formMail).toContainText(emailAddress)
    await expect(this.formCurrentAddress).toContainText(currentAddress)
    await expect(this.formPermanentAddress).toContainText(permanentAddress)
  }

}
