function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors'];

    return moves[Math.floor(Math.random()  * 3)];
}

function getComputerChoiceTest() {
    let choice = getComputerChoice();
    if(choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return true;
    } else {
        return false;
    }
}

function playRound(playerChoice, compChoice) {
    if(playerChoice === 'rock' && compChoice === 'scissors') {
        return 'You win';
    } else if(playerChoice === 'rock' && compChoice === 'paper') {
        return 'You lose';
    } else if(playerChoice === 'paper' && compChoice === 'rock') {
        return 'You win!';
    } else if(playerChoice === 'paper' && compChoice === 'scissors') {
        return 'You lose';
    } else if(playerChoice === 'scissors' && compChoice === 'paper') {
        return 'You win!';
    } else if(playerChoice === 'scissors' && compChoice === 'rock') {
        return 'You lose';
    } else if (playerChoice === compChoice) {
        return 'Draw';
    }
}

function playRoundTest() {
    let result1 = playRound('Paper', 'Rock');
    let result2 = playRound('Paper', 'Scissors');
    let result3 = playRound('Paper', 'Paper');

    if(result1 === 'You win!' || result2 === 'You lose' || result3 === 'Draw') {
        return true;
    } else {
        return false;
    }
}

// console.log(playRoundTest());
// console.log(getComputerChoiceTest());

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let round = i + 1;
        console.log('Round ' + round);
        let compChoice = getComputerChoice();

        let playerChoice = '';

        while(playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
            playerChoice = prompt('Enter your choice of rock, paper, scissors.');
        }

        console.log('The computer chose ' + compChoice);
        console.log('The player chose ' + playerChoice);

        let result = playRound(playerChoice, compChoice)
        
        if(result === 'You win')
        {
            playerScore++;
        } else if(result === 'You lose') {
            computerScore++;
        } else {
            // No one gets a point :(
        }

        console.log(result);
    }

    if(playerScore > computerScore) {
        console.log('Final result: you won! ' + playerScore + ' | ' + computerScore);
    } else if (playerScore < computerScore) {
        console.log('Final result: the computer won ' + playerScore + ' | ' + computerScore);
    } else {
        console.log('Final result: a draw' + playerScore + ' | ' + computerScore);
    }
}

game();





