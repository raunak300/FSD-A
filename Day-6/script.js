let ar=[1,2,3,34,45,54];
//1
//let newarr=ar.map((x)=>x*2);
//console.log(newarr);
//2
//let narr=ar.filter((x)=>x%2==0);
//console.log(narr.map((x)=>x*3));
//3
//let newarr=ar.filter((x)=>x%2==0).map((x)=>x*3);
//console.log(newarr);
//4
//let newar=ar.reduce((x,y)=>x+y,0);
//console.log(newar);// do 1+2+3+34
let newarray=ar.filter((x)=>x%2).map((x)=>x*4).reduce((x,y)=>x+y,0);
console.log(newarray);
//5
const student=[
    {
        name:"alice",
        score:35
    },
    {
        name:"bob",
        score:45
    },
    {
        name:"plk",
        score:50
    },
];
//6
let a=student.filter((x)=>x.score>40)
.map((x)=>x.score*2)
.reduce((x,y)=>x+y,0);
console.log(a);


