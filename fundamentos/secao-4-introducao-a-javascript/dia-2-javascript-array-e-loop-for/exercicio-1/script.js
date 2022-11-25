// const lotteryNumbers = [14, 26, 56, 39, 27, 5];

// //         console.log(lotteryNumbers[0]);
// //         console.log(lotteryNumbers[1]);
// //         console.log(lotteryNumbers[2]);
// //         console.log(lotteryNumbers[3]);
// //         console.log(lotteryNumbers[4]);
// //         console.log(lotteryNumbers[5]);




// // for (let index = 0; index < lotteryNumbers.length; index += 1) {
// //     console.log(lotteryNumbers[index]);
// //     // console.log(index);
// // }

// for (let value of lotteryNumbers) {
//     console.log(value);
// }



const studentGame = [8, 22, 26, 32, 42, 60];
console.log('Jogo do estudante', studentGame);

const number1 = 20;
const number2 = 4;
const number3 = 32;
const number4 = 28;
const number5 = 39;
const number6 = 60;

const megaSenaNumbers = [number1, number2, number3, number4, number5, number6];
console.log('Jogo sorteado', megaSenaNumbers);

let numbersOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
    // console.log(megaSenaNumbers[index]);
    let drawnNumber = megaSenaNumbers[index];
    // console.log('Número Sorteado', drawnNumber);

    for (let cont = 0; cont < studentGame.length; cont += 1) {
        let studentNumber = studentGame[cont]; 
        // console.log('Número do estudante', studentGame);

        if (drawnNumber === studentGame) {
            numbersOfHits += 1;
        }
    }
}

console.log('Número de acertos', numbersOfHits);