import { expect, type Locator, type Page } from "@playwright/test";
import { AlertsLocators } from "../locators/alerts-locators";

export class AlertsPage{
    readonly page: Page;
    readonly alertButton : Locator;


    constructor (page : Page){
        this.page = page;
        this.alertButton = page.locator(AlertsLocators.alertButton)
    }

    async visitAlertSite(){
        await this.page.goto("https://demoqa.com/alerts")
    } 

    async clickAlertButton(){
        await this.alertButton.click()
    } 
}