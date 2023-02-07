function fun(a)  
{  
var innerfun=(b)=>{  
return a*b;  
}  
console.log(a)
innerfun(a)
  
}  

console.log(fun(4))