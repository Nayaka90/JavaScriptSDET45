


async function Doctor(){
   var p = await dataBase(getUserName().username);
   console.log(p)
    Login(getUserName().username,p.password)
 
}
    function getUserName(){
        var obj={username:"nithish"}
        console.log(obj.username)
        return obj
    }
    function dataBase(un){
        return p=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log(un)
                if(un==='nithish')
                 resolve({password:123456})
                else
                reject("not found")
            },2000)
        })
    }
    function Login(un ,pwd){
  console.log(un+pwd)
    }
 
   

Doctor();







