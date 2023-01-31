var doc=["nithish",121,"sathish",122,"suresh",123,"mahesh",124]
var index=0
do {
    if(doc[index]==="mahesh"){
        console.log("Doctor's profile has been added successfully and his id is"+doc[++index])
        var jj=true
        break;
        }  

index=index+2

} while (index < doc.length);
if(jj==false)
console.log("doctor profile is not added")