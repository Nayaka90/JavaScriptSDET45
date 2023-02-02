var doc=["nithish",121,"sathish",122,"suresh",123,"mahesh",124]


for (const names of doc) {
    
    if(names==="mahesh"){
        console.log("Doctor's profile has been added successfully")
        var flag=true
        break;
        }  
        
    }
    if(flag==false)
    console.log("doctor profile is not added")