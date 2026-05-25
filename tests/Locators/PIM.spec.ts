import{Page} from '@playwright/test'

export async function navigate_PIM(page:Page)
{
    if(!await page.locator("div.oxd-brand-banner").isVisible())
    {
        await page.locator("//button[contains(@class,'oxd-main-menu-button')]").click();
        const banner = page.locator("div.oxd-brand-banner");
        await banner.waitFor({
            state : 'visible',
            timeout : 30000
        });
    }
   const pim = page.locator("//ul[@class='oxd-main-menu']/li//span[text()='PIM']");
   await pim.click();
   const pimHeader = page.getByRole("heading",{name:'PIM'});
   await pimHeader.waitFor({
     state : "visible",
     timeout : 30000
   });

}