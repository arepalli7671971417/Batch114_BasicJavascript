
let cityNames:Set<string>=new Set();
cityNames.add("Delhi")
cityNames.add("Mumbai")
cityNames.add("chennai")
cityNames.add("Bhuvaneswar")
cityNames.add("patna")
cityNames.add("pune")
console.log(cityNames)
console.log(cityNames.has("chennai"))
cityNames.delete("chennai")
console.log(cityNames.has("chennai"))
console.log(cityNames)
console.log('The Number of Elements in the set is:'+cityNames.size)