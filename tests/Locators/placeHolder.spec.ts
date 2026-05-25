import {test,expect, errors} from '@playwright/test'
import { navigate_PIM } from './PIM.spec';

test.skip("Validation for placeholder",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Username").fill("Admin");
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Password").fill("admin123");
    await page.waitForTimeout(3000);
    
})
test.skip("Validation for button",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Username").fill("Admin");
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Password").fill("admin123");
    await page.waitForTimeout(3000);
    await page.getByRole('button', {name:' Login '}).click();
    await page.waitForTimeout(3000);
})

test.beforeEach("Login to OrangeHRM", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Username").fill("Admin");
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Password").fill("admin123");
    await page.waitForTimeout(3000);
    await page.getByRole('button', {name:' Login '}).click();
    await page.waitForTimeout(3000);
});

test.skip("Select the PIM",async({page})=>
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
    await page.pause();
    await expect(page.getByAltText("client brand banner")).toBeVisible();
   const pim = page.locator("//ul[@class='oxd-main-menu']/li//span[text()='PIM']");
   await pim.click();
   const pimHeader = page.getByRole("heading",{name:'PIM'});
   await pimHeader.waitFor({
     state : "visible",
     timeout : 10000
   });

})

test.skip("Validate the configuration", async({page}) =>{
    await navigate_PIM(page);
    await page.getByText("Configuration ").click();
    await page.waitForTimeout(3000);
});

test.skip("Validate the custom field in configuration list", async({page}) =>{

    navigate_PIM(page);
    await page.getByText("Configuration ").click();
    await page.waitForTimeout(3000);
    // await page.pause();
    await page.getByRole("listitem").filter({hasText: /^Custom Fields$/}).click();

});

test("validate the Employee List", async({page})=>{
    navigate_PIM(page);
    await page.waitForTimeout(2000);
    await page.getByText("Employee List").click();
    await expect(page.url()).toContain("/viewEmployeeList");

    // await page.waitForTimeout(3000);
    await page.waitForSelector("//label[text()='Job Title']");
    const dd_label = page.locator("//label[text()='Job Title']/parent::div/following-sibling::div");
    await dd_label.click();
    // await page.waitForTimeout(5000);
    // await page.pause();
    await page.waitForSelector("//label[text()='Job Title']/parent::div/following-sibling::div//div[@role='listbox']");
    const dd_listCount = page.locator("//label[text()='Job Title']/parent::div/following-sibling::div//div[@role='listbox']");
    console.log("Listbox count: "+await dd_listCount.count());
    const dd_listElement =  page.locator("//label[text()='Job Title']/parent::div/following-sibling::div//div[@role='listbox']/div[@role='option']");
    console.log("Options count: "+await dd_listElement.count());
    const dd_options = await dd_listElement.allTextContents();
    console.log("all list of items: ",dd_options);
    await dd_listElement.getByRole("option", {name: 'Chief Executive Officer'}).click();
    await page.waitForTimeout(3000)
    await expect(page.locator("//label[text()='Job Title']/parent::div/following-sibling::div//div[contains(text(), 'Chief Executive Officer')]")).toBeVisible();    
})


