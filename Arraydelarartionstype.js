
var doc= new Array("nithish","sathish","suresh","mahesh")//type1
console.log(doc)

var doc1=["nithish","sathish","suresh","mahesh"]//type 2
console.log(doc1)

var arr=new Array(3)//drawback of using type1 ,if we are passing only one numeric data then it considerd it as length
console.log(arr)//[ <3 empty items> ]
console.log(arr.length)//3


console.log("for of loop will iterate value one by one from array irectlywithout an index value")
for (const names of doc) {
    console.log(names)    
}

console.log("for in loop iterate all the value in a array based on index value")
for (const index in doc1) {   
    console.log(index+"--->"+doc[index])    
}

