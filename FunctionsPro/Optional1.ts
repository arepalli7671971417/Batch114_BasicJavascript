
function createaccount(username:string,aadharno? :number)
{
    if (aadharno ==undefined)
    {
        console.log('Here user is creating Gmail Account')
    }
    else
    {
        console.log('Here user is in Bank and creating the bank account number')
    }
}
createaccount('ravi')