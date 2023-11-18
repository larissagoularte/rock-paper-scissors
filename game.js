let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let choice;

const player = document.querySelector('#pScore');
player.textContent = `Player Score: ${playerScore}`

const computer = document.querySelector('#cScore');
computer.textContent = `Computer Score: ${computerScore}`

const output = document.querySelector('.output');
output.textContent = "First player to 5 wins."

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        playerChoice = button.id;
        computerChoice = (computerSelection())
        console.log(playerScore)
        play();
        updateScores();
    })
})

function computerSelection(){
    let randNum = Math.floor(Math.random()*3);

    if(randNum === 0){
        choice = "rock";
    } else if(randNum === 1){
        choice = "paper";
    } else if (randNum === 2){
        choice = "scissors"
    }

    return choice;
}

function play(){
    if(playerScore===5){
        output.textContent = "You win :)"
        playerScore = 0;
        computerScore = 0;
    }else if(computerScore===5){
        output.textContent = "You lose :("
        playerScore = 0;
        computerScore = 0;
    } else{
        if(
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ){
            playerScore++
            console.log('p: ' + playerChoice)
            console.log('c: ' + computerChoice)
        } else if(
            (playerChoice === "rock" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "rock")
        ){
            computerScore++
            console.log('p: ' + playerChoice)
            console.log('c: ' + computerChoice)
        } else{
    
            console.log('tie?')
            console.log('p: ' + playerChoice)
            console.log('c: ' + computerChoice)
        }
    }
    
}

function updateScores() {
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
}