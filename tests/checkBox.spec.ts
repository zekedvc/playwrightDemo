import test from "@playwright/test";
import { CheckBoxPage } from "../pages/checkbox-page";


test.beforeEach(async ({ page }) => {
    const checkboxpage = new CheckBoxPage(page)
    await checkboxpage.visitCheckBoxPage()
  });


// test("Expand and select all boxes", async ({page}) => {
//     const checkboxpage = new CheckBoxPage(page)
//     await checkboxpage.expandHome()
//     await checkboxpage.expandDesktop()
//     await checkboxpage.expandDocuments()
//     await checkboxpage.expandDownloads()
//     await checkboxpage.selectHomeCheckbox()
    
// });

test("Expand and select all boxes", async ({ page }) => {
    const checkboxpage = new CheckBoxPage(page);
    
    await test.step("Expand Home checkbox", async () => {
        await checkboxpage.expandHome();
    });

    await test.step("Expand Desktop checkbox", async () => {
        await checkboxpage.expandDesktop();
    });

    await test.step("Expand Documents checkbox", async () => {
        await checkboxpage.expandDocuments();
    });

    await test.step("Expand Downloads checkbox", async () => {
        await checkboxpage.expandDownloads();
    });

    await test.step("Select Home checkbox", async () => {
        await checkboxpage.selectHomeCheckbox();
    });
});

test("Expand all boxes", async ({page}) => {
    const checkboxpage = new CheckBoxPage(page)
    await checkboxpage.expandHome()
    await checkboxpage.expandDesktop()
    await checkboxpage.expandDocuments()
    await checkboxpage.expandDownloads()
});

