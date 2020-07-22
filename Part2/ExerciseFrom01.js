let numberInput = document.getElementById('number-input')
let runButton = document.getElementById('run-button')
let output = document.getElementById('output')

function printMultiply() {
    let number = Number(numberInput.value)
    let outputHtml = ''

    if (number === 0){
        output.innerHTML = 'Get 0'
        return
    }

    for (let i = 1; i <= 12; i++) {
        outputHtml += '<p>'
        outputHtml += number + ' x ' + i + ' = ' + (number * i)
        outputHtml += '</p>'
    }

    output.innerHTML = outputHtml
}

runButton.addEventListener('click', printMultiply)