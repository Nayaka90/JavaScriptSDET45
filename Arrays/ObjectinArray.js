// class person{
//     constructor(fname,age,phno){
//     this.name=fname
//     this.age=age
//     this.phno=phno
//     }
//     }

//     var arr=[new person("nithi",25,702209705),new person("saatish",69,123456799),new person("naresh",79,123456799)]
//     arr.forEach(element => {
//         console.log(element.name)
//     });

    function person(fname,age,phno){
        this.name=fname
        this.age=age
        this.phno=phno
    this.doc=(function doc(){
 return("doc object created");
    })()  
}

var arr=[new person("nithi",25,702209705),new person("saatish",69,123456799),new person("naresh",79,123456799)]
arr.forEach(element => {
    console.log(element.doc)
});