import { expect, type Locator, type Page } from "@playwright/test";
import { ButtonsLocators } from "../locators/buttons-locators";

export class ButtonPage{
    readonly page: Page;
    readonly doubleClickButton : Locator;
    readonly rightClickButton : Locator;
    readonly clickMeButton : Locator;



    constructor (page : Page){
        this.page = page;
        this.doubleClickButton = page.locator(ButtonsLocators.doubleClickButton)
        this.rightClickButton = page.locator(ButtonsLocators.rightClickButton)
        this.clickMeButton = page.locator(ButtonsLocators.clickMeButton)
    }

    async doubleClickButtonAction(){
        await this.page.goto("https://demoqa.com/buttons")
        await this.doubleClickButton.dblclick()
    } 
}