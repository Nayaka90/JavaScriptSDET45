var arr =[1,2,5,4,1,4,4]
for (let index = 0; index < arr.length; index++) {
    for (let j= 0; j< arr.length; j++) {
        if(arr[j]>arr[j+1])
        {
            var temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }   
    }
}
console.log(arr)