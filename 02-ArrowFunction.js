//function
//มีการ return

// function plusnum(a, b) {
//     return a + b
// }

//arrowfunction

//มีปีกกา กรณีที่มีคำสั่งมากกว่า 1
// const plusnum = (a, b) => {
//     return a + b
// }

//arrowfunctoin 1 line
//ไม่มีปีกกา

// const plusnum = (a, b) => a + b

// let result = plusnum(200, 50)

//parameter 1 => ไม่มีวงเล็บ
//return object

const student = name => ({ name: name, age: 10 })

let result = student("ant")

console.log("Arrowfunction:", result);