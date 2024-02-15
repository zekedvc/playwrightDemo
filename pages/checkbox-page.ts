import { expect, type Locator, type Page } from '@playwright/test';

export class CheckBoxPage {
  // Define Selectors
  readonly page: Page;
  readonly siteTitle: Locator;
  readonly homeCheckbox: Locator;
  readonly expandCloseHomeButton: Locator;
  readonly expandCloseDesktopButton: Locator;
  readonly expandCloseDocumentsButton: Locator;
  readonly expandCloseDownloadsButton: Locator;
  readonly result: Locator;


  constructor(page: Page) {
    // Initialize selectors using constructor
    this.page = page;
    this.siteTitle = page.locator('.main-header:has-text("Check Box")');
    this.homeCheckbox = page.locator('label').filter({ hasText: 'Home' }).getByRole('img').first()
    this.expandCloseHomeButton = page.locator("button[title='Toggle'] > .rct-icon");
    this.expandCloseDesktopButton = page.locator("button[title='Toggle'] > .rct-icon").nth(1)
    this.expandCloseDocumentsButton = page.locator("button[title='Toggle'] > .rct-icon").nth(2)
    this.expandCloseDownloadsButton = page.locator("button[title='Toggle'] > .rct-icon").nth(3)
    this.result = page.locator('id="result"')
    
  }

  // Define Methods
  async visitCheckBoxPage() {
    await this.page.goto('https://demoqa.com/checkbox');
    await expect(this.siteTitle).toBeVisible();
    
  }

  async selectHomeCheckbox(){
    await this.homeCheckbox.click()    
  }

  async expandHome(){
    await this.expandCloseHomeButton.click()
  }

  async expandDesktop(){
    await this.expandCloseDesktopButton.click()
  }

  async expandDocuments(){
    await this.expandCloseDocumentsButton.click()
  }
  async expandDownloads(){
    await this.expandCloseDownloadsButton.click()
  }

  async verifyResultAppears(){
    await expect(this.result).toBeVisible()
  }

}