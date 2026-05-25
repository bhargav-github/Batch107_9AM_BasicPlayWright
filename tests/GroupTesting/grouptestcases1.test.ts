import {test, expect, chromium} from '@playwright/test'


test("Group1 - Test case 1 @smoke @Reg", async()=>{
    console.log("Hey i am in Group1 - Test case 1 - Reg");
      
})
test("Group1 - Test case 2 @smoke", async()=>{ 
    console.log("Group1 - Test case 2 - smoke");
})
test("Group1 - Test case 3 @Reg", async()=>{
     console.log("Hey i am in Group1 - Test case 3 -reg");  
})


test("Group2 - Test case 4 @Reg", async()=>{
     console.log("Hey i am in Group2 - Test case 4 -reg"); 
})

test("Group2 - Test cases 5 @Reg @smoke", async()=> {
    console.log("Hey i am in Group2 - Test case 5 -smoke");
})

test("Group2 - Test case 6, @unit @Reg", async()=>{
    console.log("Hey i am in Group2 - Test case 6 - unit");
})

