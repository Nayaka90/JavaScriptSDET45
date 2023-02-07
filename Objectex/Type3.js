var doctor= new Object()
doctor.name="nithish"
doctor.age=25
doctor.patient=()=>"vinod is a patient"
// console.log(doctor.patient());
// console.log(doctor.age);
// console.log(doctor);
for (const key in doctor) {
    console.log(key+"--->"+doctor[key])
}

