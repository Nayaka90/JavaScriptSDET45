var a=10
multi(a)
function multi(a)
{
if(a%5==0&&a%10==0)
console.log(`${a} is a multiple of 5 and 10`)
else if(a%5==0)
console.log(`${a} is a multiple of 5 `)
else if(a%10==0)
console.log(`${a} is a multiple of 10 `)
else 
console.log(`${a} is a not multiple of 5 and 10 `)
}