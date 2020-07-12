let name = "name"
let last = "last"
let age = 20

//แบบเดิม

let user1 = {
    name: name,
    last: last,
    age: age
}

// แบบใหม่

let user2 = {
    name, last, age
}

function addUser(name, last, age) {
    return {
        name, last, age
    }
}

console.log(user1);
console.log(user2);
console.log(addUser("color", "red", 5));
