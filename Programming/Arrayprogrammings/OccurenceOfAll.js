var arr =[1,2,5,4,1,4,4]
 flag=new Array(arr.length)
for (let i = 0; i< arr.length; i++) {
    var count=1;
    if(flag[i]==undefined){
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i]==arr[j])
        { flag[j]=true
          count++  
        }  
    }
    console.log(arr[i]+"-->"+count) 
} 
}