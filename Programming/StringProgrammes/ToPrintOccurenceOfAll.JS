function occurenceOfAll(str){
for (let i = 0; i< str.length; i++) {
    var count=0;
    for (let j = 0; j < str.length; j++) {
        if(str[i]==str[j]){
          if(j<i){
            break; 
          } 
              count++
        }  
    }
    if(count>0)
        console.log(str[i]+"-->"+count) 
} 
}
occurenceOfAll('Testyantra')
