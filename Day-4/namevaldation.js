function validate(){
    let name= document.getElementById("uname").value;
    let res=document.getElementById("result");
    if(name.length==0){
        console.log("enter something");
    }
    else if( name.length<3){
        console.log("length is not good");
        res.innerText="length is small";
    }
    else{
        console.log("this is good");
        alert("validated");
        res.innerText="valdated";
    }
}