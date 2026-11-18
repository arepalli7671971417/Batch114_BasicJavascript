
let a : number = 51;
let b : number = 62;
function addingcount()
{
    let t :number=0;
    for(let d:number=1;d<=4;d++)
    {
        t+=d;
    }
    console.log("TRhe sum of all numbers:"+t)
}
setTimeout(():void=>{
addingcount();
})
console.log("The sum of A and B is :"+(a+b))