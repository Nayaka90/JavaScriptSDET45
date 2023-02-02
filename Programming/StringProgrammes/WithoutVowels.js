var str='testyanra'
var vowels="AEIOUaeiou"
var str1=''

for (let index = 0; index < str.length; index++) {
    if(vowels.indexOf(str[index])==-1)
    str1=str1+str[index]   
}
console.log(str1);