function admin(name,consulation_fees=500){
    console.log("Dr."+name+" consultation fee is  "+consulation_fees );
}

admin("vinod")//Dr.vinod consultation fee is  500 ,here 500 is a default value
admin("nithish",600)//Dr.nithish consultation fee is  600 ,here 600 is a overrided 

function admin(name,consulation_fees=500,surname){
    console.log(surname+name+" consultation fee is  "+consulation_fees );
}

admin("nithish",undefined,"Mr.")//in this case we have  to pass undefined so that we can maintain old value