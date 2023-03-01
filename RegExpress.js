var str="1ljh25lKJj25*#AB"
var k=str.replace(/[^0-9]/g,'a').split('a').filter((value)=>value!='').reduce((total,value)=>Number(total)+Number(value))
console.log(k);
var j=str.match(/[a-z]/gi)
console.log(j);////['l', 'j', 'h', 'l', 'K', 'J','j']
var l=str.matchAll(/[A-Z]/g)/*[ 'K', index: 7, input: '1ljh25lKJj25*#AB', groups: undefined ]
[ 'J', index: 8, input: '1ljh25lKJj25*#AB', groups: undefined ]
[ 'A', index: 14, input: '1ljh25lKJj25*#AB', groups: undefined ]
[ 'B', index: 15, input: '1ljh25lKJj25*#AB', groups: undefined ]*/
for (const iterator of l) {
    console.log(iterator);
}

var m=str.search(/J/i)//2
var m=str.search(/J/)//8

console.log(m);

var j=str.match(/[^a-z]/gi)//[ '1', '2', '5', '2', '5', '*','#' ]
console.log(j)


