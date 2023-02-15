"use strict"
const obj={
    name:"nithish"
}
Object.freeze(obj)
console.log(obj.name)//nithish
//obj.name="nayak"//it will through error in strict mode otherwise it will not throw error

console.log(obj.name);//nithish

const a={
  name:"nn"  
}
// Object.defineProperty(a,'name',{value:'nayak',
// writtable:false
// })
console.log(Object.getOwnPropertyDescriptors(a));
//a.name="nithish"