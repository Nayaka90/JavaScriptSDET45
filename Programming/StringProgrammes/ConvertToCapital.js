var str='TEstyantra'
var str1=''
for (let i = 0; i< str.length; i++) {
    if(str[i]==='t')
    str1=str1+str[i].toUpperCase()
    else if(str[i]==='T')
    str1=str1+str[i]
    else
    str1=str1+str[i].toLowerCase()
}
console.log(str1)