import test from "@playwright/test";
import { WebTablePage } from "../pages/web-table-page"


test("Proceed to WebTable site", async ({page}) => {
    const webtablepage = new WebTablePage(page)
    await webtablepage.visitWebTableSite()
});

test("Edit element one in webTable site", async ({page}) => {
    const webtablepage = new WebTablePage(page)
    await webtablepage.editFirstElement()
});




