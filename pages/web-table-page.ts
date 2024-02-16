import { expect, type Locator, type Page } from '@playwright/test';

export class WebTablePage {
  // Define Selectors
  readonly page: Page;
  readonly textCenter: Locator;
  readonly editRecordButtonOne: Locator;
  readonly deleteRecordButtonOne: Locator;  
  readonly deleteRecordButtonTwo: Locator;  
  readonly addRecordButton: Locator; 
  readonly firstName : Locator;
  readonly lastName : Locator;
  readonly email : Locator;
  readonly age: Locator;
  readonly salary: Locator;
  readonly department: Locator;
  readonly submitButton: Locator;




  constructor(page: Page) {
    // Initialize selectors using constructor
    this.page = page;
    this.textCenter = page.locator('.text-center');
    this.editRecordButtonOne = page.locator("#edit-record-1")
    this.deleteRecordButtonOne = page.locator("#delete-record-1 path")
    this.deleteRecordButtonTwo = page.locator("#delete-record-2 path")
    this.addRecordButton = page.getByRole('button', { name: 'Add' })
    this.firstName = page.getByPlaceholder('First Name')
    this.lastName = page.getByPlaceholder('Last Name')
    this.email = page.getByPlaceholder('name@example.com')
    this.age = page.getByPlaceholder('Age')
    this.salary = page.getByPlaceholder('Salary')
    this.department = page.getByPlaceholder('Department')
    this.submitButton = page.getByRole('button', { name: 'Submit' })
    
  }

 
  async visitWebTableSite() {
    await this.page.goto("https://demoqa.com/webtables")
    await expect(this.textCenter).toContainText("Web Tables")

  }

  async editFirstElement(){
    await this.page.goto("https://demoqa.com/webtables")
    await this.editRecordButtonOne.click()
  }

  async addNewRecord(firstName: string, lastName: string, email: string, age: string, salary: string, department: string){
    await this.page.goto("https://demoqa.com/webtables")
    await this.addRecordButton.click()  
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName)
    await this.email.fill(email)
    await this.age.fill(age)
    await this.salary.fill(salary)
    await this.department.fill(department)
    await this.submitButton.click()
  }
}


