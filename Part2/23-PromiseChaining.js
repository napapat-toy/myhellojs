// Callback

// setTimeout(() => {
//     const width = Number(prompt('ความกว้าง'));
//     if (isNaN(width)) {
//         alert('อย่าใส่ตัวอักษรในความกว้าง');
//         return;
//     }
//     setTimeout(() => {
//         const length = Number(prompt('ความยาว'));
//         if (isNaN(length)) {
//             alert('ใส่เลขความยาวมา');
//             return;
//         }
//         setTimeout(() => {
//             const height = Number(prompt('ความสูง'));
//             if (isNaN(height)) {
//                 alert('ใส่ตัวเลขเถอะ');
//                 return;
//             }
//             setTimeout(() => {
//                 const brownieSize = width * length * height;
//                 alert('ปริมาตรบราวนี่ = ' + brownieSize);
//             }, 3000)
//         }, 2000)
//     }, 1500)
// }, 1000)

// Promise

function inputPromise(title, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numberInput = Number(prompt(title));
            if (isNaN(numberInput)) {
                reject(new Error('ไม่ผ่าน'));
                return;
            }
            resolve(numberInput);
        }, delay)
    });
}

let width = 0;
let length = 0;
let height = 0;

inputPromise('ความกว้าง', 1000)
    .then((result) => {
        alert(result);
        width = result;
        return inputPromise('ความยาว', 1500);
    })
    .then((result) => {
        alert(result);
        length = result;
        return inputPromise('ความสูง', 2000);
    })
    .then((result) => {
        height = result;
        setTimeout(() => {
            const brownieSize = width * length * height;
            alert('ปริมาตรบราวนี่ = ' + brownieSize);
        }, 3000)
    })
    .catch((error) => {
        alert(error.message);
    });