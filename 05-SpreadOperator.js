//Spread Operator

//Array
let fruit = ['ม่ะมวง', 'แตงโม']
console.log(fruit);
let food = [...fruit, "ต้มยำ", "กระเพรา"]
console.log(food);
let allfood = [...fruit, ...food]
console.log(allfood);

let product = { name: "ทุเรียน", price: 200 }
console.log(product);
let newproduct = { ...product, catagory: "ผลไม้" }
console.log(newproduct);

let newprice = { ...newproduct, price: 500 }
console.log(newprice);

