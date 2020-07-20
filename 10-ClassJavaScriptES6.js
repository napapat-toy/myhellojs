//แบบเดิม

// var user={
//     name:"red",
//     age:16,
//     SayHi:function () {
//         return "Hello = "+this.name
//     }
// }
// console.log(user.SayHi());

// function User(name, age) {
//     this.name = name
//     this.age = age
// }
// User.prototype.SayHi = function () {
//     console.log("Hello = " + this.name + " Age = " + this.age);
// }

// var user1 = new User("Red", 20)
// user1.SayHi()

//แบบใหม่

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    SayHi() {
        console.log("Hello = " + this.name + " Age = " + this.age);
    }
}

let user1 = new User("Blue", 17)
user1.SayHi()