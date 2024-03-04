import { expect, type Locator, type Page} from "@playwright/test"

import { PracticeFormLocators } from "../locators/practice-form-locators";


export class PracticeFormPage{

    readonly page: Page;
    readonly firstNameBox :  Locator;
    readonly lastNameBox : Locator;
    readonly email: Locator;
    readonly genderMale: Locator;
    readonly genderFemale: Locator;
    readonly genderOther: Locator;


    constructor(page:Page){
        this.page = page;
        this.firstNameBox = page.locator(PracticeFormLocators.firstNameBox)
        this.email = page.locator(PracticeFormLocators.email)
        this.genderMale = page.locator(PracticeFormLocators.genderMale)
        this.genderFemale = page.locator(PracticeFormLocators.genderFemale)
        this.genderOther = page.locator(PracticeFormLocators.genderOther)
    }


    async visitPracticeFormPage() {
        await this.page.goto('https://demoqa.com/automation-practice-form');   
      }
    
      async typeFirstName(){
        await this.firstNameBox.fill("Test")    
      }
}