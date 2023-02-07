function removeduplicates(str){
var ch=str.split("")
for (let i = 0; i< ch.length; i++) {
    for (let j = i+1; j < str.length; j++) {
        if(str[i]==str[j])
        ch.splice(j,1)
    }
} 
return ch.join("")// tesyanra

//return ch.tostring()//t,e,s,y,a,n,r,a
}

console.log("after removing duplicates "+removeduplicates('testyanra'));