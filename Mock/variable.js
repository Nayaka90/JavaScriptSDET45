    console.log(a);   //undefined
    var a 
    a = 100;
    var a =200
    console.log(a);  //200 
    
//****************************************************************************************/
    
    console.log(x);  //undefined  
    var x 
    x = 20
   //let x = 35    // error SyntaxError:Identifier 'x' has already been declared
    x = 95              
    console.log(x);  
//****************************************************************************************/
    
    const y = 3.1415;
    
    function fun1() {
        console.log("local");
    }
  //  y = 3;    //we cant reintialize const variable //TypeError:Assignment to constant variable.             
    console.log(y);    
    
//****************************************************************************************/
    
    {
        var b = "Rekha"
        let w = "welcome"
    }
    console.log(b)//"Rekha"
   // console.log(w);//ReferenceError: w is not defined 
    
// ****************************************************************************************/
    
    console.log(index);     //undefined   
    for (var index = 0; index < 5; index++) {
        console.log(index); //0 1 2 3 4
    }                                                
    console.log(index);   // 5
    
    //****************************************************************************************/
    
    //console.log(index);  //ReferenceError: index is not defined  
    for (let index = 0; index < 5; index++) {
        console.log(index);          //0 1 2 3 4           
    }
    //console.log(index);  //ReferenceError: index is not defined        
    
    //****************************************************************************************/
    
    var a = 100;
    console.log(a);//100   
    {
        var a = 200
        console.log(a);  //200
    }
    console.log(a);   //200
    
    //****************************************************************************************/
    
    let x = 10
    {
        let x = 20
    }
    console.log(x);   //10
    
    //****************************************************************************************/
    
    var a = 20
    let a = 30//  //SyntaxError: Identifier 'a' has already been declared
    console.log(a);