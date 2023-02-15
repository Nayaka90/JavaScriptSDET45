


async function Doctor(){
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
            },10000)
        })
    }
    
    p=dataBase(getUserName().username);
    await p.then(msg=>console.log(msg.password)).catch(msg=>console.log(msg))
   
}
Doctor();






