class Person{
    name
    age
    address
    constructor(name,age,address){
        this.name=name
        this.age=age
        this.address=address
    }
  personal_details(){
       return(`${this.name} is of age ${this.age} belongs to ${this.address}`);
    }
}

class Doctor extends Person {
qualification
username
password
specialization
constructor(name,age,address,qualification,username,password,specialization){
   super(name,age,address)
    this.qualification=qualification
    this.username=username
    this.password=password
    this.specialization=specialization
}
personal_details(){
    return(`${this.name}  ${this.age} belongs to ${this.address}`);
 }
}

var doctor1=new Doctor("nithish",25,"Jp nagar",['Mbbs','MD'],"doc13",123456,"gyenocologist")
console.log(doctor1.age)
console.log(doctor1.personal_details());

module.exports=Doctor;
