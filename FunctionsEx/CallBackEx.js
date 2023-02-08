function doctor(dname,pname,operation){
    console.log (dname+' is added successfully')
    operation(pname)
}
function patient(pname){
    console.log (pname+' is admitted successfully')
}
doctor("nithish","vinod",patient)

