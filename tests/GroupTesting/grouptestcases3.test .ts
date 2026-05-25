import {test, expect} from '@playwright/test'


test("Group1 - Test case 1",{tag: ["@Reg", "@smoke"]}, async()=>{
    console.log("Hey i am in Group1 - Test case 1 - Reg");
      
})
test("Group1 - Test case 2",{tag: "@smoke"}, async()=>{ 
    console.log("Group1 - Test case 2 - smoke");
})
test("Group1 - Test case 3",{tag: "@Reg"}, async()=>{
     console.log("Hey i am in Group1 - Test case 3 -reg");  
})


test("Group2 - Test case 4",{tag: "@Reg"}, async()=>{
     console.log("Hey i am in Group2 - Test case 4 -reg"); 
})

test("Group2 - Test cases 5",{tag: ["@Reg", "@smoke"]}, async()=> {
    console.log("Hey i am in Group2 - Test case 5 -smoke");
})

test("Group2 - Test case 6",{tag: ["@Reg", "@unit"]} , async()=>{
    console.log("Hey i am in Group2 - Test case 6 - unit");
})

