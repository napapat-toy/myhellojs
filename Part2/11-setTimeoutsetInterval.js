let numberArray = [1, 5, 6, 7, 3]

let randomButton = document.getElementById('random-button')
let stopButton = document.getElementById('stop-button')
let output = document.getElementById('output')

let timeoutId = 0

randomButton.addEventListener('click', () => {

    // // console.log(1);  //1
    // setTimeout(() => {
    //     // console.log(2);  //3
    //     let n = numberArray.length
    //     let index = Math.floor(Math.random() * n)
    //     let number = numberArray[index]
    //     output.innerHTML = number
    // }, 1000)
    // // console.log(3);  //2

    timeoutId = setInterval(() => {
        let n = numberArray.length
        let index = Math.floor(Math.random() * n)
        let number = numberArray[index]
        output.innerHTML = number
    }, 1000)
})

stopButton.addEventListener('click', () => {
    clearInterval(timeoutId)
})