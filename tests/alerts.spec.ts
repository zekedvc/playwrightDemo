import test from "@playwright/test";
import { AlertsPage } from "../pages/alerts-page";

test.describe ("Proceed to Alerts page", async ()=>{
    test.beforeEach(async ({ page }) => {
        const alertpage = new AlertsPage(page)
        await alertpage.visitAlertSite()
      });

    test("Verify user can click to see alert", async ({page}) => {
        const alertpage = new AlertsPage(page)
        await alertpage.clickAlertButton()
    });  
  
})



