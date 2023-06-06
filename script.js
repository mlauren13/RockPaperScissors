function getComputerChoice(){
    let choices=['Rock','Paper', 'Scissors']
    return choices[Math.floor(Math.random()*choices.length)];
}
function getPlayerChoice(){
    let playerSelection = prompt("Rock, Paper, or Scissors?")
}
function rockPaperScissors(playerSelection, computerSelection){
    computerSelection = getComputerChoice().toLowerCase;
    playerSelection = playerSelection.toLowerCase;


    if(
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
        ) {
            return ("Computer wins!");
        }
    else if(
        (computerSelection === 'rock' && playerSelection ==='paper') ||
        (computerSelection === 'paper' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'rock')
    ) {
        return ("Player wins!");
    }
    else if(computerSelection===playerSelection) {
        return ("It's a tie!");
    }
    
}



