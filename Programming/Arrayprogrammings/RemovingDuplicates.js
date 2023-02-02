var arr= [1,2,5,4,1,4,4]
flag=new Array(arr.length)
var duplicate=0;
for (let i = 0; i < arr.length; i++) {
    var count=1
    for (let j = i+1; j < arr.length; j++) {
        if(flag[i]==undefined) {
            if(arr[i]==arr[j])
            {
                flag[j]=true;
                duplicate++;
            }
        }
    }	
}
 arr1=new Array(arr.length-duplicate)
var k=0;
for (let i = 0; i < arr.length; i++) {
    if(flag[i]==undefined) 
        arr1[k++]=arr[i]

}

console.log(arr1);