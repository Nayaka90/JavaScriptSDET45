
     function getUserName(){
         var obj={username:"nithish"}
         console.log(obj.username)
         return obj
     }
     function dataBase(un,resolve,reject){
             setTimeout(()=>{
                 console.log(un)
                 if(un==='nithish')
                  resolve ({password:123456})
                 else
                 reject("not found")
             },2000)
         
     }
  function Login(un ,pwd){
   console.log(un+pwd)
     }
     
    var un= getUserName().username
       p= dataBase(un,(obj)=>{Login(un,obj.password)});
      //  console.log(p)
        // 
      