//var doc=["nithish","sathish","suresh","mahesh"]
var doc= new Array("nithish","sathish","suresh","mahesh")
for (const index in doc) {
    console.log(index+ "--->"+doc[index]) 

    if(doc[index]==="mahesh"){
        console.log("Doctor's profile has been added successfully ")
        var flag=true
        break;
        }  
       
    }
    if(flag==false)
    console.log("doctor profile is not added")