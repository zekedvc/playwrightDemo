import { expect, type Locator, type Page } from '@playwright/test';

export class RadioPage{
    readonly page: Page;
    readonly questionLocator: Locator;
    readonly yesRadio: Locator;
    readonly impressiveRadio: Locator;
    readonly selectionYesMessage: Locator;


    constructor(page: Page){
        this.page = page;
        this.questionLocator = page.locator(".mb-3")
        this.yesRadio = page.locator('[for="yesRadio"]');
        this.impressiveRadio = page.locator("[for='impressiveRadio']")
        this.selectionYesMessage = page.locator(".text-success")
    }


    async visitRadioPage(){
        await this.page.goto("https://demoqa.com/radio-button")
        await expect(this.questionLocator).toBeVisible()
    }

    async clickYesRadioButton(){
        await this.yesRadio.click()
    }

    async clickImpressiveRadioButton(){
        await this.impressiveRadio.click()
    }
    
    async verifySelectionIsYes(){
        await expect(this.selectionYesMessage).toContainText("Yes")
    }

}

