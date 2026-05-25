import {test, expect} from '@playwright/test'

test("Group1 - Test case 1", async()=>{
    console.log("Hey i am in Group1 - Test case 1");
      
})
test("Group1 - Test case 2 ", async()=>{ 
    expect(10).toBe(15); 
})
test("Group1 - Test case 3", async()=>{
     console.log("Hey i am in Group1 - Test case 3");  
})
test("Group1 - Test case 4", async()=>{
     console.log("Hey i am in Group1 - Test case 4"); 
})

test("Group1 - Test cases 5", async()=> {
    console.log("Hey i am in Group1 - Test case 5");
})

test("Group1 - Test case 6", async()=>{
    console.log("Hey i am in Group1 - Test case 6");
})
