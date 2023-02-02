var str='testyantra'
var str1=''
for (let i = 0; i< str.length; i++) {
    if(str[i]==='t')
    str1=str1+str[i].toUpperCase()
    else 
    str1=str1+str[i]   
}
console.log(str1)