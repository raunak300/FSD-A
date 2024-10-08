
function validate(){
    let name=document.getElementById("un").value; //.value to get the value
    let pass=document.getElementById("pass").value;
    let para=document.getElementById("para");
    let rname="admin";
    let rpass="abc";
    //console.log(name)
    if(name==rname){
        if (rpass==pass){
            console.log("password correct");
            console.log("pass added:" +pass);
            alert("correct password");
            para.innerText="Validated";

        }
        else{
            console.log("password incorrect :)");
            console.log("pass added:" +pass);
            alert("sorry incorrect password :(")
            para.innerText="Not Validated";
        }
    }
    else{
        console.log("incorrect name")
        alert("incorrect name :(");
        console.log("name added:" +name);
        console.log("pass added:" +pass);
        para.innerText="Not Validated";
    }


}