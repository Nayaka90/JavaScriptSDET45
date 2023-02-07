var doctor={
    name:"nithish",
    age:25,
    consulataionfees:500,
    education:["mmbs","mphils"],
    doc:function(){
     return("doctor profile added")
    },
    patients:{
       name:"sathish",
       age:55
    }
}
console.log(doctor.name);
console.log(doctor.doc());
console.log(doctor.patients.name);


for (const key in doctor) {
    console.log(key+"--->"+doctor[key])
}

