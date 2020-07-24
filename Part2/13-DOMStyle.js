let message = document.querySelector('.message')
// message.style.color = 'red'
// message.style.backgroundColor = 'black'
// message.style.fontSize = '30px'

let spoilButton = document.querySelector('.spoil-button')

spoilButton.addEventListener('click', () => {
    // Show/Hide message
    if (message.style.display === 'none') {
        message.style.display = 'block'
    }
    else {
        message.style.display = 'none'
    }
})