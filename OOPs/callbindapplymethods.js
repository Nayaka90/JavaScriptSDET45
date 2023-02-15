var Patient1={
    name:"nithish",
    age:5,
    username:"nithi",
    details:function(){
        console.log(`${this.name} is of age ${this.age} years`);
    }
}
var doctor1={
    name:"vinod",
    age:25,
    username:"admin",
    logindetails:function(greeting){
        console.log(`${greeting} ${this.name} your username is ${this.username}`);
    }
}

Patient1.details.call(doctor1)//function borrowing
doctor1.logindetails.call(Patient1,"hi")//function borrowing
Patient1.details.apply(doctor1)
doctor1.logindetails.apply(Patient1,["hi"])
var a=Patient1.details.bind(doctor1)
a()
var b=doctor1.logindetails.bind(Patient1,"hi")
b()
function A(){
    console.log(this.name);
}
A.call(doctor1)//vinod