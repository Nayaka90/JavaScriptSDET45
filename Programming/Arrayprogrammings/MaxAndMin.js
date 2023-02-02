var arr =[1,2,5,4,1,4,4]
var big=arr[0]
var small=arr[0]
for (let index = 0; index < arr.length; index++) {
    if(arr[index]<small)
    small=arr[index]
     if(arr[index]>big)
    big=arr[index]    
}
console.log(big+" is biggest");
console.log(small+" is smallest");