let Doctor={
    name:"nithish",
    age:25,
    details:function(prefix){
    console.log(`${prefix} ${this.name} is of age ${this.age} years `)
    }
    }
    
    let Patient={
    name:"vinod",
    age:27
    }
    Doctor.details.call(Patient,"mr.")//mr. vinod is of age 27 years
    Doctor.details.apply(Patient,["mr."])//mr. vinod is of age 27 years
    details1=Doctor.details.bind(Patient,"mr.")
    details1()   //mr. vinod is of age 27 years