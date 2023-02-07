
var name="nayaka";
console.log(this);

(function (name){
    console.log("doctor name is "+(this.name));
    })("nithish");