interface king
{
  kname: string,
  kstate : string,
  kage : number,
}
interface queen 
{
  qname: string,
  qstate : string,
  qage : number,
}
let kingdata : king =
{
  kname: 'ravi',
  kstate : 'hyderbad',
  kage : 99,
}
let queendata : queen =
{
  qname: 'remo',
  qstate : 'telangana',
  qage : 45,
}
let kingqueen ={ ...kingdata, ...queendata}
console.log(kingqueen)