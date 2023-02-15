

document.getElementById("lgn").onclick=login


function login()
{var un=document.getElementById("username").value
var pwd=document.getElementById("password").value
if(un=='admin'&& pwd=='12345'){
document.getElementById("username").value=''
document.getElementById("password").value=''
document.getElementById("click").innerHTML=" welcome " +document.getElementById("username").value
document.getElementById("instruction").innerHTML=" your Logging in as admin "
document.getElementById("date").innerHTML="Date:"+new Date().toDateString()}
else
if(un!='admin'&& pwd!='12345')
alert("invalid username and password")
else if(un!='admin')
alert("invalid username")
else 
alert("invalid password")
}

