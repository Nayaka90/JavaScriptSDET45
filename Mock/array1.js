
//to print occurence of 0's and 1's
var arr=[0,1,0,0,1,1,1]

for (let i = 0; i< arr.length; i++) {
    var count=0
    if(arr[i]==0||arr[i]==1){
for (let j= 0; j < arr.length; j++) {
    if(arr[i]==arr[j])
    {
        if(j<i)
        break;
        count++
    }
}
if(count>0)    
console.log(`${arr[i]} count is ${count}`);
    }
}


//generate random number within specified range (10 to 30)

var r=Math.floor(Math.random()*(30-10+1)) + 10;
console.log(r);

//how to empty an array by using inbuilt method

var brr=[1,2,3,4,5]
brr.splice(0,brr.length)
console.log(brr);//[]
brr.length=0
console.log(brr);//[]

//O/p
const a=10
{
    const a=20
    console.log(a);//20
}
console.log(a);//10

// to print even and odd numbers in an array
var arr=[1,2,3,4,5]
var even=[]
var odd=[]
for (let index = 0; index < arr.length; index++) {
    if(arr[index]%2==0)
     even.push(arr[index])
    else
    odd.push(arr[index])
}
console.log(even);//[ 2, 4 ]
console.log(odd);//[ 1, 3, 5 ]
//to add all odd numbers ina an array
var sum=0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2!=0)
    sum=sum+arr[i]   
}
console.log(`sum of odd number is ${sum}`);


//to print prime numbers
var crr=[1,2,3,4,5]
for (let i = 0; i < crr.length; i++) {
    var b=true;
    for (let j=2;j <=crr[i]/2; j++) {
        if(arr[i]%j==0){
            b=false;
            break;
        }    
    }
    if(b) 
    console.log(crr[i]);     
}

//op
const fruits=['orange','apple']
console.log(fruits.length);//2
console.log(fruits[0]);//orange


//programme to fetch unique element in an array
var arr=[0,1,0,0,1,1,1]

for (let i = 0; i< arr.length; i++) {
    var count=0
    if(arr[i]==0||arr[i]==1){
for (let j= 0; j < arr.length; j++) {
    if(arr[i]==arr[j])
    {
        if(j<i)
        break;
        count++
    }
}
if(count>0)    
console.log(`${arr[i]} `);//0,1
    }
}

//programme to print only upper case lettr in a string 'I am an employee of Testyantra'

const str = "I am an employee of Testyantra";
for (let char of str) {
  if (char>='A'&& char<='Z') {
    console.log(char);
  }
}

//declare an object as const and reintialize(its possible)
const patient={
name:"nithish",
age:25
}
patient.name="nayaka"
console.log(patient);//{ name: 'nayaka', age: 25 }//this is possible
// patient={
//     name:"john"
// }  //TypeError: Assignment to constant variable.


//print febonnacci 
var j=0
var k=1
var l=j+k
console.log(`${j} ${k}`);
while(l<15){   
console.log(l);
j=k
k=l
l=j+k
}

//programme to remove spaces in a string 'I am an employee of Testyantra'
var st='I am an employee of Testyantra'
var ch=st.split(' ')//1st type
st=ch.join('')
console.log(st);
st=st.replaceAll(' ','')//2nd type
console.log(st);

//without inbuilt methods
var st='I am an employee of Testyantra'
let strWithoutSpace = '';
for (let i = 0; i < st.length; i++) {
  if (st[i] !== ' ') {
    strWithoutSpace += st[i];
  }
}
console.log(strWithoutSpace);

//reverse word in string
var st='I am an employee of Testyantra'
var words=st.split(' ')
var rev=words.map(word=>{
   var ch=word.split('')
   word=ch.reverse().join('')
   return word
})
console.log(rev.join(' '));

//op
(function(){
    ma=na=ka=55//global variable accesible to outside method
})

//console.log(na);//ReferenceError: na is not defined bcz we didnt invoked function untill unless invoking function will not executes and we cant use gloabl variable
// (function(){
//    ma=na=ka=55
// })()
//console.log(ma)//55
//count of people living in India
countrie=[{fname:"abc",address:"india"},
{fname:"def",address:"europe"},
{fname:"rst",address:"india"},
{fname:"xyz",address:"europe"},
{fname:"mno",address:"russia"}]
var count=0
countrie.forEach(element => {
    let address=element.address
    if(address==="india")
    count++  
});
console.log(`${count} people living in india `);

for (let i= 0; i < countrie.length; i++) {
var count=0
    for (let j = 0; j < countrie.length; j++) {
        if(countrie[i].address===countrie[j].address)
        {if(j<i)
            break
           count++
        }  
    }
   if(count>0) 
   console.log(`${countrie[i].address}--->${count}`);
}


