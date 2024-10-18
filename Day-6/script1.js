//7
//sayhello=()=>{console.log("hello function");}
//console.log("welcome");
//setTimeout(sayhello,4000);
//console.log("end");
//8 
// console.log("start");
// setTimeout(()=>{
//     console.log("first task");
//     setTimeout(()=>{
//         console.log("second task");
//         setTimeout(()=>{
//             console.log("third task");
//         },3000);
//     },2000);
// },1000);
//9
// console.log("end");
// const myPromise=new Promise((resolve,reject)=>{
//     let sucess=false;
//     if(sucess){
//         resolve("data send sucess");
//     }
//     else{
//         reject("sending data failed ")
//     }
// });
// myPromise.then((message)=>console.log(message)).catch((error)=>console.log("error"+error));

function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("first task completed",1000)
.then(()=>task("second task completed",2000))
.then(()=>task("third task completed",3000));
