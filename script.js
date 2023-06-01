function getComputerChoice(){
    let choices=['Rock','Paper', 'Scissors']
    return choices[Math.floor(Math.random()*choices.length)];
}
function rockPaperScissors(playerSelection, computerSelection){
    if (playerSelection.toLowerCase()=== computerSelection.toLowerase()){
        return "You tied!";
    }
    else if (playerSelection.toLowerCase()==='rock' && computerSelection.toLowerCase()==='paper'){
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase()==='paper' && computerSelection.toLowerCase()==='scissors'){
        return "You lose! Scissors beats Paper.";
    }
    else if (playerSelection.toLowerCase()==='scissors' && computerSelection.toLowerCase()==='rock'){
        
    }
}



