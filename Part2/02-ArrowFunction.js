// function saySomething1() {
//     console.log('Something');
// }

// let saySomething2 = () => {
//     console.log('Something too');
// }

// saySomething1()
// saySomething2()

let sayButton = document.getElementById('say-button')

sayButton.addEventListener('click', function () {
    console.log('Something')
})