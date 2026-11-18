
function agevalidation()
{
    return new Promise(resolve,reject)=>
{
    let age :number =15;
    if (age<15)
    {
        resolve("person is Teenager")
    }
    else
        {
        reject("person is adult")
        }
  }
}
async function agecheck() 
{
    const eli: any = await agevalidate();
    console.log(eli)
}
agecheck();