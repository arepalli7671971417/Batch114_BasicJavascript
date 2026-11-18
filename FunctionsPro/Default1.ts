
function ticketBook(username:string,age:number,discount : string = '50% concession')
{
    if (age<60)
    {
        console.log('Pay full amount as per ticket cost')
    }
    else
    {
        console.log("fare amount should be" +discount)
    }
}
ticketBook('ravi',45);