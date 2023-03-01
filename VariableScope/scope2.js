
//--------------first scenario------------------------
{
    var d = 100//global
    let e = 200//block
    const f = 300//block
    function add() {
        var g = 100//local
        let h = 200//local
        const i = 300//local
    }
    add();//block : f add()

}
//---------------second scenario-----------------------
   
    function add() {
        var g = 100//local
        let h = 200//local
        const i = 300//local
        {
            var d = 100//local
            let e = 200//block
            const f = 300//block
        }
    }
    add();//block : f add()

