class person{
constructor(fname,lname,age){
this.fname=fname
this.lname=lname
this.age=age
console.log(arguments[2]);//its store value based on index
console.log(arguments)//arguments is an array which store all the arguments { '0': 'nithish', '1': 'nayaka', '2': 25 }
}
}

doctor=new person("nithish","nayaka",25);
patient=new person("vinod","kumar",25);

console.log(doctor.fname);