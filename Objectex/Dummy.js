var str='good morning welcome to javascript session'
vowels='AEIOUaeiou'
var words=str.split(' ')
var arr=words.map((word)=>{
   if(vowels.indexOf(word.charAt(2))!=-1 && word.length>2 )
return word.split('')[0].toUpperCase()+word.substring(1).toLowerCase()
   else
    return word.toLowerCase()

}).join(' ')
console.log(arr);