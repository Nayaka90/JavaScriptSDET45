var str='testyanra'
var vowels="AEIOUaeiou"

ch=new Array(str.length)
for (let index = 0; index < str.length; index++) {
  ch[index]= str.charAt(index)
}
flag=new Array(str.length)
for (let i = 0; i< str.length; i++) {
    var count=1;
    if(flag[i]==undefined){
    for (let j = i+1; j < str.length; j++) {
        if(str[i]==str[j])
        { flag[j]=true
          count++  
        }  
    }
    if(!(vowels.indexOf(str[i])==-1))
        console.log(str[i]+"-->"+count) 
} 
}
