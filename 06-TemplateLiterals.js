//Template Literals

//แบบเดิม

const name = "name"
const last = "last"
const city = "city"

const all = "Name = " + name + " Last = " + last + " City = " + city
console.log(all);

const allNew = "Name = " + name + "\
\nLast = "+ last + "\
\nCity = "+ city
console.log(allNew);

//แบบใหม่

const allname1 = `Name = ${name} Last = ${last} City = ${city}`
const allname2 = `Name = ${name}
Last = ${last}
City = ${city}`
console.log(allname1);
console.log(allname2);

