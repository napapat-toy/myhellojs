// Promise

function inputPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numberInput = Number(prompt('ความกว้าง'));
            if (isNaN(numberInput)) {
                reject(new Error('ไม่ผ่าน'));
                return;
            }
            resolve(numberInput);
        }, 1000)
    });
}

inputPromise().then((result) => {
    alert(result);
}).catch((error) => {
    alert(error.message);
});

// Callback

setTimeout(() => {
    const width = Number(prompt('ความกว้าง'));
    if (isNaN(width)) {
        alert('อย่าใส่ตัวอักษรในความกว้าง');
        return;
    }
    setTimeout(() => {
        const length = Number(prompt('ความยาว'));
        if (isNaN(length)) {
            alert('ใส่เลขความยาวมา');
            return;
        }
        setTimeout(() => {
            const height = Number(prompt('ความสูง'));
            if (isNaN(height)) {
                alert('ใส่ตัวเลขเถอะ');
                return;
            }
            setTimeout(() => {
                const brownieSize = width * length * height;
                alert('ปริมาตรบราวนี่ = ' + brownieSize);
            }, 3000)
        }, 2000)
    }, 1500)
}, 1000)