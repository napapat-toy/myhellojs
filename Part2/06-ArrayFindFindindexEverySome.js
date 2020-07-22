let scores = [82, 75, 48, 64, 36]

// Find

// let failedScore = scores.find((score) => {
//     return score < 50
// })

// console.log(failedScore);

// Find Index

// let failedScore = scores.findIndex((score) => {
//     return score < 50
// })

// console.log(failedScore);

// Every

// let everyonePassed = scores.every((score)=>{
//     return score >= 50
// })

// console.log(everyonePassed);

// Some

let someonePassed = scores.some((score) => {
    return score >= 50
})

console.log(someonePassed);