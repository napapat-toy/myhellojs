//Destructuring Object

//แบบเดิม
var person = {
    name: "name",
    skill: "java php phython"
}

// var name = person.name
// var skill = person.skill
// console.log(`name = ${name} , skill = ${skill}`);

//แบบใหม่

var player = {
    name: "name",
    skill: "java php phython"
}

let { name, skill } = player
console.log(`name = ${name} , skill = ${skill}`);
