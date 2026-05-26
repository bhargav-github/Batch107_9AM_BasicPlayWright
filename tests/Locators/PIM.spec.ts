import{Page} from '@playwright/test'

export async function navigate_PIM(page:Page)
{
    // await page.pause();
    try{
        await page.locator("//i[@class='oxd-icon bi-chevron-left']").isVisible()
        await page.locator("//button[contains(@class,'oxd-main-menu-button')]").click();
        await page.waitForSelector("//i[@class='oxd-icon bi-chevron-left']");
    }catch{
        if(await page.locator("//i[@class='oxd-icon bi-chevron-left']").isVisible())
        {
            await page.locator("//button[contains(@class,'oxd-main-menu-button')]").click();
            await page.waitForSelector("//i[@class='oxd-icon bi-chevron-left']");
        }
    }
   const pim = page.locator("//ul[@class='oxd-main-menu']/li//span[text()='PIM']");
   await pim.click();
   const pimHeader = page.getByRole("heading",{name:'PIM'});
   await pimHeader.waitFor({
     state : "visible",
     timeout : 30000
   });

}