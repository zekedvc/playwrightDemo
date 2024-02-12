import test from "@playwright/test";
import { CheckBoxPage } from "../pages/checkbox-page";


test("Expand and select all boxes", async ({page}) => {
    const checkboxpage = new CheckBoxPage(page)
    await checkboxpage.visitCheckBoxPage()
    await checkboxpage.expandHome()
    await checkboxpage.expandDesktop()
    await checkboxpage.expandDocuments()
    await checkboxpage.expandDownloads()
    await checkboxpage.selectHomeCheckbox()
});

test("Expand all boxes", async ({page}) => {
    const checkboxpage = new CheckBoxPage(page)
    await checkboxpage.visitCheckBoxPage()
    await checkboxpage.expandHome()
    await checkboxpage.expandDesktop()
    await checkboxpage.expandDocuments()
    await checkboxpage.expandDownloads()
});

