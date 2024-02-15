import { expect, type Locator, type Page } from '@playwright/test';

export class WebTablePage {
  // Define Selectors
  readonly page: Page;
  readonly textCenter: Locator;
  readonly editRecordButtonOne: Locator;


  constructor(page: Page) {
    // Initialize selectors using constructor
    this.page = page;
    this.textCenter = page.locator('.text-center');
    this.editRecordButtonOne = page.locator("#edit-record-1")
    
  }

  // Define Methods
  
  async visitWebTableSite() {
    await this.page.goto("https://demoqa.com/webtables")
    await expect(this.textCenter).toContainText("Web Tables")

  }

  async editFirstElement(){
    await this.page.goto("https://demoqa.com/webtables")
    await this.editRecordButtonOne.click()
  }




}