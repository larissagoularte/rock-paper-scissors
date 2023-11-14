function getComputerChoice(){
    let options = ["rock", "papers", "scissors"]

    let choice = Math.floor(Math.random()*3)

    let result = options[choice]

    return result
}

function playRound(playerSelection, computerSelection){
    //1 = win, 2 = lose, 3 = tie, 4 = error
    playerSelection = playerSelection.toLowerCase(); 

    if(playerSelection === "rock" && computerSelection === "scissors") {
        return 1
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return 2
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You chose: " + playerSelection)
        console.log("The computer chose: " + computerSelection)
        return 1
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You chose: " + playerSelection)
        console.log("The computer chose: " + computerSelection)
        return 2
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("You chose: " + playerSelection)
        console.log("The computer chose: " + computerSelection)
        return 1
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You chose: " + playerSelection)
        console.log("The computer chose: " + computerSelection)
        return 2
    } else if((playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "scissors")){
        console.log("You chose: " + playerSelection)
        console.log("The computer chose: " + computerSelection)
        return 3
    } else {
        return 4
    }
}

function game(){
    let playerChoice;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    for(i=0;i<5;i++){
        let round = i + 1;

        if(round === 5){
            break;
        } else {
        console.log("ROUND " + round)
        console.log("///CURRENT SCORE///")
        console.log("Player :" + playerScore)
        console.log("Computer: " + computerScore)

        playerChoice = prompt("Rock, paper, or scissors?");
        result = playRound(playerChoice, getComputerChoice());
 
        if(result === 1){
                playerScore += 1;
        } else if (result === 2){
                computerScore += 1;
        } 
    }
}
        if(playerScore>computerScore){
            console.log("You win :)")
        } else {
            console.log("You lose :(")
        }    
}

game();
