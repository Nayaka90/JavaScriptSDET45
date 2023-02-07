//Sorting of an array

// var ar=[0,-1,5,6,1,2,3]
// for(let i=0;i<ar.length;i++)
// {

// for(let j=0;j<ar.length-i;j++){
// if(ar[j]>ar[j+1]){
// var temp=ar[j] 
// ar[j]=ar[j+1] 
// ar[j+1]=temp
//  }
//  }
// }
// console.log(ar)//[,0,-1,1,2,3,5,6]



var str="Testyntra"
var vowels="AEIOUaeiou"
var flag=new Array(str.length)
for(let i=0;i<str.length;i++)
{ var count=1;
if(vowels.indexOf(str[i])==-1&&flag[i]==undefined){
for(var j=0;j<str.length;j++){
if(str[i]==str[j]){
count++
flag[j]="defined"
}
}
console.log(str[i]+"--->"+count)
}
}