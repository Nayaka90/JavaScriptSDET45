class Person{
    static a="Hi"
    b;
    c;
    constructor(b,c){
 this.b=b
 this.c=c
    }
 static patient(){ 
//console.log(a)//ReferenceError: a is not defined
console.log(this.a)//Hi
console.log(this.b)//undefined
console.log(new Person(5,6).b);//hlo we can access by using object
 }
doctor(){
   // console.log(b)//ReferenceError: b is not defined
    console.log(this.a)//undefined
    console.log(Person.a)//hi
    console.log(this.b);//hlo 
     }


}
Person.patient()
new Person(5,6).doctor()
//Person.doctor()//TypeError: Person.doctor is not a function
//new Person(5,6).patient()//TypeError: (intermediate value).patient is not a function