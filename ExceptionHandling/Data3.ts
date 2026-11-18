
let a: number = 67;
let b: number =44;
try
{
let c: string[] = new Array(-5)
console.log("The number of elements stored in Array c is:" +c.length)
}
catch(myerrmsg)
{
    console.log("Array length should be POSITIVE integers")
}
console.log("The sum of A and B is:"+(a+b))