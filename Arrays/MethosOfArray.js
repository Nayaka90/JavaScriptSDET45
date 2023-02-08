var arr=[1,2,3,4,5]
var brr=[6,7,8,9];
// //concat()
var crr=arr.concat(brr)//this method returns new array by concating elements at the end of an array,it will not going to modify existing array
console.log(crr)//[1, 2, 3, 4, 5,6, 7, 8, 9]
// //push()
console.log(brr.push(10,11));//6//Appends new elements to the end of an array, and returns the new length of the array.
console.log(brr);//[ 6, 7, 8, 9, 10, 11 ]
// //unshift()
console.log(arr.unshift(-1,0));//Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr);//[-1,0,1,2,3,4,5]
// //pop()
console.log(arr.pop());//5//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr);//[1,2,3,4]
//shift method
console.log(brr.shift());//6//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(brr);//[ 7, 8, 9]
arr.copyWithin(3,1,3)//copyWithin(target: number, start: number, end: number)//this method used to copy elements with in an array
console.log(arr);//[ 1, 2, 3, 2, 3 ]1,2,3 is a target 1st index is starting point and 3 index is ending point
 var ranking=(rank)=>rank>0

console.log(arr.find(ranking));//1
console.log(arr.filter(ranking));//[ 1,2, 3, 4, 5 ]

console.log(arr.every(ranking))//true//determines whether all the members of an array satisfy the specified test.
console.log(arr.findIndex(ranking))//0 th index//Returns the index of the first element in the array where predicate is true, and -1 otherwise.
var drr=[1,2,3,["hi","hlo"]]

console.log(drr.flat());//[ 1, 2, 3, 'hi', 'hlo' ]
 console.log(drr.flatMap(ranking))//[ true, true, true, false ]
 var keys=brr.keys()//its an method to return IterableIterator<number>

for (const key of keys) {//whenever we wqnt to iterate iterable objects we use forof loop 
       console.log(key) 
    }
 
var entries=brr.entries()//[ 0, 6 ][ 1, 7 ][ 2, 8 ][ 3, 9 ]
for (const entry of entries) {
    console.log(entry);//
}

console.log(arr.splice(1,2,6,7,8));//[ 2, 3 ]
console.log(arr)//[ 1, 6, 7, 8, 4, 5 ]

console.log(arr.slice(1,5))//[ 2, 3, 4, 5 ]
console.log(arr)
var hrr=[1,1,1,2,[19,5,6]]
console.log(hrr.flatMap(value=>[value,value+5]))

console.log(hrr.filter(value=>value>2))


console.log(hrr.length);
console.log(hrr.fill(8,0,3))
console.log(hrr);


