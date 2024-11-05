async function fetchdata(){
    try{
        let response=await fetch('https://api.github.com/users?per_page=10');
        let data=await response.json();
        //console.log(data);
        data.forEach(element=>{
            let h=document.getElementById("top");
            let h1=document.createElement('h1');
            h1.textContent=element.node_id;
            h.appendChild(h1);
            let a=document.createElement('a');
            a.textContent=element.node_id;
            a.setAttribute("href",element.html_url);
            h.appendChild(a);
            //console.log(`node id ${element.node_id} and html url is ${element.url}`);
            console.log("fetch done");
        })
    }catch(error){
        console.log(error);
    }
}
fetchdata();