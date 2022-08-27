function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors'];

    return moves[Math.floor(Math.random()  * 3)];
}


let compChoice = getComputerChoice();
let playerChoice = prompt();

console.log('The computer chose ' + compChoice);
console.log('The player chose ' + playerChoice);

if(playerChoice === 'rock' && compChoice === 'scissors') {
    console.log('You win')
} else if(playerChoice === 'rock' && compChoice === 'paper') {
    console.log('You lose')
} else if(playerChoice === 'paper' && compChoice === 'rock') {
    console.log('You win!')
} else if(playerChoice === 'paper' && compChoice === 'scissors') {
    console.log('You lose');
} else if(playerChoice === 'scissors' && compChoice === 'paper') {
    console.log('You win!');
} else if(playerChoice === 'scissors' && compChoice === 'rock') {
    console.log('You lose');
} else if (playerChoice === compChoice) {
    console.log('Draw');
}