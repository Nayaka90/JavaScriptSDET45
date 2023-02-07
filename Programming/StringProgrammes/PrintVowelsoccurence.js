var str='testyantra'
console.log
var vowels="AEIOUaeiou"
flag=new Array(str.length)
for (let i = 0; i< str.length; i++) {
    var count=1;
    if(flag[i]==undefined){
      if(vowels.indexOf(str[i])!=-1){
    for (let j = i+1; j < str.length; j++) {
        if(str[i]==str[j])
        { flag[j]=true
          count++  
        }  
    }
        console.log(str[i]+"-->"+count) 
} }

}
