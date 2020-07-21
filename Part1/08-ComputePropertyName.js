//Computed Property Name

let food1 = { name: "Cake ส้ม", price: "200" }
let food2 = { "name": "Cake มะม่วง", "price": 250 }
// console.log(food1);
// console.log(food2);

let user = {
    ['user' + 1 * 10]: "red",
    ['user' + 2 * 20]: "blue"
}
// console.log(user);

// let name = "Cake"
// let food = { [name]: name+" มะม่วง", food2: "Cake ส้ม" }
// console.log(food);

let name = "cake"

let menu = {
    [name]: name + " ส้ม", [name + "Mix"]: "ผลส้ม"
}

let { cake, cakeMix } = menu

console.log(menu);
console.log(cake);
console.log(cakeMix);



