//DefaultParameter

const addUser = (name, last, city = "ขอนแก่น") => {
    return name + " " + last + " city = " + city
}

console.log(addUser("name", "last", "city"));
console.log(addUser("โจโจ้", "ทองคำ"));
console.log(addUser("โจโจ้", "ทองคำ", "อุบล"));