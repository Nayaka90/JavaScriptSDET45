 
var str="he is is a boy"

console.log(str.length);// 14  returns length of string
console.log(str.charAt(0))// h return charcter at that index and if we try to access more than index we get empty string
console.log(str.charCodeAt(0));//104 returns ascii value of that charcter if there is no charcter then return NaN(not a number)
console.log(str.codePointAt(0))//104 returns a ascii value
console.log(str.endsWith('y'));//true  returns boolean value
console.log(str.indexOf('a'));//9 returns index of that character
console.log(str.lastIndexOf('a'));//9 returns last index of that character
console.log(str.localeCompare("he is is a boy"));//0 (-1 if the string is sorted before the compareString 0 if the two strings are equal1 if the string is sorted after the compareString
console.log(str.match("is"));//[ 'is', index: 3, input: 'he is is a boy', groups: undefined ] 
var ar=str.matchAll("is")//returns iterable iterator
console.log(Array.from(ar));//[[ 'is', index: 3, input: 'he is is a boy', groups: undefined ],[ 'is', index: 6, input: 'he is is a boy', groups: undefined ] ]
console.log(str.valueOf());//return value
console.log(str.padEnd(25,"jjkkk"));
console.log(str.padStart(25,'ab'));//abababababahe is is a boy
console.log(str.replace('a','z'));//he is is z boy
console.log(str.search('b'));//11 returns index,it will take arguments
console.log(str.toString());
console.log(str.trim());//it will remove spaces at begining and end EX: before:"  a  " after:"a"
console.log(str.trimEnd());//it will remove spaces at end Ex: before:"  a  " after:"  a"
console.log(str.trimStart())//it will remove spaces at begining Ex: before:"  a  " after:"a  "
console.log(str.substring(1,3));//returns string based on start and end index ,if we pass negetive it take as zero only
console.log(str.slice(1,3));//same as substring but here if we pass negetive it will consider from the end
console.log(str.split(""))//to convert to array for each character
console.log(str.split())//[ 'he is is a boy' ]
console.log(str.toLowerCase());//converts lowercase
console.log(str.toUpperCase());//convert uppercase
console.log(str.toLocaleUpperCase());//converts local languages also
console.log(str.toLocaleLowerCase());//converts local languages also
console.log(str.includes("is"))//true it works likes contains function



