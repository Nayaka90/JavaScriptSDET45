class patient{
#name
$age
constructor(name,age){
    this.#name=name
    this.age=age
}

set names(name){
    this.#name=name
    }
get names(){
    return this.#name
}

}
var patient1=new patient("nithish",25)
console.log(patient1.names);
patient1.names="vinod"
console.log(patient1.names);

