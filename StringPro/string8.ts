let myinfo:string ='My car Name is :I20,my Car Engine no :32%@ag54376';
let removeAlpha:string= myinfo.replace(/[0-9]/g,"");
let removespecial:string= myinfo.replace(/[A-Za-z0-9]/g,"");
console.log(removeAlpha)
console.log(removespecial)
