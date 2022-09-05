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
        return 'You win!';
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

    let computerChoice = null;
    let humanChoice = null;

    let weapons = document.querySelectorAll('.weapon');

    let result = document.querySelector('#result');

    let humanScore = document.querySelector('#yourScore');
    let computerScore = document.querySelector('#computerScore');

    let rounds = 0;

    let finalResult = document.querySelector('#finalResult');
    
    weapons.forEach(function(weapon) {
        weapon.addEventListener('click', function() {
            computerChoice = getComputerChoice();

            domComputerText = document.querySelector("#computerChoice");
            domComputerText.innerText = 'The computer chose ' + computerChoice;

            humanChoice = this.firstChild.alt.toLowerCase();

            domHumanText = document.querySelector("#humanChoice");
            domHumanText.innerText = 'The human chose ' + humanChoice;

            let winner = playRound(humanChoice, computerChoice)
            result.innerText = winner;

            if(winner === 'You win!') {
                humanScore.innerText = ++(humanScore.innerText);
            } else if(winner === 'You lose') {
                computerScore.innerText = ++(computerScore.innerText);
            }

            rounds = ++rounds;



            if(finalResult.innerText == 5 || computerScore.innerText == 5) {
                finalResult.innerText = humanScore.innerText > computerScore.innerText ? 'Winner!' : (humanScore.innerText < computerScore.innerText ? 'Loser!': 'Draw');

            }
            
        });

       
    });
}

game();





