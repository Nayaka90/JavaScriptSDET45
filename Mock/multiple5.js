for (let i = 0; i< 100; i++) {
    if(i%3==0)
    console.log(`multiple of 3 is ${i}`) 
}
for (let i = 0; i< 100; i++) {

    if(i%5==0)
    console.log(`multiple of 5 is ${i}`)  
}
for (let i = 0; i< 100; i++) {
  
  if(i%3==0 && i%5==0)
    console.log(`multiple of 3&5 is ${i}`)   
}

for (let index = 1; index < 2; index++) {
    console.log(index); //1 
}
console.log(index);//ReferenceError: index is not defined

