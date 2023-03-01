var a = 100   //global
let b = 200   //script
const c = 300  //script
function add() {
    var g = 100//local
    let h = 200//local
    const i = 300//local
}
add();

{
    var d = 100//global
    let e = 200//block
    const f = 300//block
}
(()=>{
    var l = 100//global
    let j = 200//block
    const k = 300//block
})()