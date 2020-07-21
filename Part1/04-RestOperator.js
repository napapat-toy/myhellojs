//Rest Operator

// const addUser = (name, last, ...city) => {
//     return name + " " + last + " " + city
// }

// console.log(addUser("ชื่อ", "นามสกุล", "เมือง"));
// console.log(addUser("แดง", "แป๊ด", "กรุงเทพ", "ขอนแก่น", "เชียงใหม่", "กระบี่"));

const addMessage = (first, ...message) => {
    return message.map(m => first + message)
}
const addNumber = (...number) => {
    return number.reduce((first, current) => {
        return first + current
    })
}
console.log(addMessage("Hello", "JS", "React"));

console.log(addNumber(1, 2, 3, 4, 5));
