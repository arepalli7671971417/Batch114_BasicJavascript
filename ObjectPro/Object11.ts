interface empinfo 
{
    empid : number,
    empname : string,
    empsalary : number,
    empdesignation : string,
    isActive : Boolean,
    empAddress:
    {
        empstreet : string,
        emparea : string,
        empcity : string,
        empstate : string,
        emppin : number
    }
}
let empdata : empinfo =
{
   empid :2456,
    empname : 'gold',
    empsalary : 354648,
    empdesignation : 'QA Manager',
    isActive : true,
    empAddress:  
    {
      empstreet : 'ROAD NO 1',
        emparea : 'Nagar',
        empcity : 'hyderabad',
        empstate : 'Telangana',
        emppin : 656752,  
    }
}

console.log(Object .entries (empdata))