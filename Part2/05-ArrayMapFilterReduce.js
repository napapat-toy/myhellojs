let scores = [82, 75, 48, 64, 36]

// Map

// let passFailScores = scores.map((score) => {
//     if (score >= 50) {
//         return ' passed'
//     }
//     return 'failed'
// })
// console.log(scores);
// console.log(passFailScores);

// Filter

// let passScores = scores.filter((score) => {
//     return score >= 50
// })

// console.log(scores);
// console.log(passScores);

// Reduce

let sumScore = scores.reduce((sum, score) => {
    return sum + score
})

console.log(scores);
console.log(sumScore);