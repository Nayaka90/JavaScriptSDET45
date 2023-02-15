var Patient={
name:"vinod",
age:25,
address:"jpnagr",
details:function(){
    return `${this.name} age is ${this.age}`}
}
var Patient1=Object.create(Patient)
console.log(Patient1.name);//vinod
console.log(Patient1.details());

function Person(name,age,address){
this.name="hi"
this.age=age
this.address=address
this.details=function(){
    return `${this.name} age is ${this.age}`}
}
var Patients=Object.create(new Person())


console.log(Patients.name);

