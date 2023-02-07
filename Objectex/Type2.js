function docdetails(name,age,consulataionfees,qualification,wishfn)
{
    this.name=name
    this.age=age
    this.consulataionfees=consulataionfees
    this.qualification=qualification
    this.doc=function doc(){
 return("doc object created");
    }
    this.wishfn=wishfn
    
}

var data1=new docdetails("nithish",25,500,["mbbs","mphil"],()=>"hi")
var data2=new docdetails("sathish",35,600,["bsc","msc"])
console.log(data1.wishfn());//hi
//console.log(data2.wishfn());//wishfn is not a function bcz we didn't sent a parameter so it consider it as variable
console.log(data1); /*docdetails { name: 'nithish',age: 25,consulataionfees: 500,qualification: [ 'mbbs', 'mphil' ],doc: [Function: doc],
                  wishfn: [Function (anonymous)]}*/
console.log(data2);
console.log(data1.doc())//doc object created
console.log(data1.qualification[1])//mphil
console.log(data1.qualification)//[ 'mbbs', 'mphil' ]
data1.wish="Hi"//adding new property into an object
console.log(data1.wish);//hi
data1.wish="Hlo"//to modify property of an object
console.log(data1.wish);//hlo
delete data1.wish//to delete property
console.log(data1.wish);//undefined


for (const key in data1) {
    console.log(key+"--->"+data1[key])
}


