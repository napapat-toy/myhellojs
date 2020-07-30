let answers = document.querySelectorAll('.answer');
let errorMessage = document.querySelector('.error-message')
let answerForm = document.querySelector('.answer-form')

function checkAnswers(event) {
    let tooLong = false;
    answers.forEach((answer) => {
        if (answer.value.length > 20) {
            tooLong = true;
        }
    });
    if (tooLong) {
        errorMessage.style.display = 'block'
        event.preventDefault();
    }
    // else {
    //     errorMessage.style.display = 'none'
    // }
}

// answers.forEach((answer) => {
//     answer.addEventListener('change', checkAnswer)
// })
// answers.forEach((answer) => {
//     answer.addEventListener('input', checkAnswers)
// })

answerForm.addEventListener('submit',checkAnswers)