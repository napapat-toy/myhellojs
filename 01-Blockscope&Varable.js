//global , local ->block scope
//var let
//constant

let price = 20
let fruit = "มะม่วง"

if (price === 20) {
    let fruit = "ส้มโอ"
    console.log("in block", fruit)
}
console.log("out block", fruit);



const person = { name: "name", last: "last" }
person.name = "john"
console.log(person)
