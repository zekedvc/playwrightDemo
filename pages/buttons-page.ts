import { expect, type Locator, type Page } from "@playwright/test";

export class ButtonPage{
    readonly page: Page;
    readonly doubleClickButton : Locator;
    readonly rightClickButton : Locator;
    readonly clickMeButton : Locator;



    constructor (page : Page){
        this.page = page;
        this.doubleClickButton = page.locator("#doubleClickBtn")
        this.rightClickButton = page.locator('#rightClickBtn')
        this.clickMeButton = page.locator('#6svLO')
    }

    async doubleClickButtonAction(){
        await this.page.goto("https://demoqa.com/buttons")
        await this.doubleClickButton.dblclick()
    } 




}