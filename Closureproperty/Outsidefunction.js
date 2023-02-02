var a=10
let b=20
const c=30

function add(){
    var x=40
    let y=50
    const z= 60
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(x)
    console.log(y)
    console.log(z)
}
add()

console.log(a)//10
console.log(b)//20
console.log(c)//30
console.log(x)//undefined
console.log(y)//undefined
console.log(z)//undefined