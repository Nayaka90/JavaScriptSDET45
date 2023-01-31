var doc=["nithish",121,"sathish",122,"suresh",123,"mahesh",124]
for (let index = 0; index < doc.length; index++) {
    if(doc[index]==="mahesh"){
    console.log("Doctor's profile has been added successfully and his id is "+doc[++index] )
    var jj=true
    break;
    }  
    index++; 
}
if(jj==false)
console.log("doctor profile is not added")