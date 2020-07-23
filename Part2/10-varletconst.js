// let จะไม่หลุด block scope
// const ค่าคงที่ และไม่หลุด block scope
// var หลุด block scope , ตัวแปรยุคเก่า ใช้ let , const แทน

// let

// let human = 'พี่น้อย'
// human = 'พี่เสก'
// if (2 > 1) {
//     let fish = 'ปลาทูน่า'
//     fish = 'ปลาแซลมอน'
//     console.log(human); // 1
//     console.log(fish); // 2
// }
// console.log(human); // 3
// console.log(fish); // 4

// const

// const human = 'พี่น้อย'
// human = 'พี่เสก'
// if (2 > 1) {
//     const fish = 'ปลาทูน่า'
//     fish = 'ปลาแซลมอน'
//     console.log(human); // 1
//     console.log(fish); // 2
// }
// console.log(human); // 3
// console.log(fish); // 4

// var

var human = 'พี่น้อย'
human = 'พี่เสก'
if (2 > 1) {
    var fish = 'ปลาทูน่า'
    fish = 'ปลาแซลมอน'
    console.log(human); // 1
    console.log(fish); // 2
}
console.log(human); // 3
console.log(fish); // 4