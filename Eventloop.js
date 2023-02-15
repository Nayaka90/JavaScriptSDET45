console.log("Hi")
setTimeout(() => {
   console.log("kk"); 
}, 2000);
count=0
{
id=setInterval(()=>{
    console.log("ll");
    count++
    if(count>5)
    clearInterval(id)
},1000)}


console.log("bye")