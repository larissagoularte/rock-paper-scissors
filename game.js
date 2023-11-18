let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

let choice;
let winner;

const resetBtn = document.getElementById('resetBtn')
const player = document.querySelector('#pScore');


resetBtn.addEventListener('click', resetGame)

player.textContent = `player score: ${playerScore}`

const computer = document.querySelector('#cScore');
computer.textContent = `computer score: ${computerScore}`

const output = document.querySelector('.output');

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        playerChoice = button.id;
        computerChoice = (computerSelection())
        playRound();
        updateScores();
        updateChoices(playerChoice, computerChoice);
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

function playRound(){
    if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ){
        playerScore++
        winner = 'player'
    } else if(
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")
    ){
        computerScore++
        winner = 'computer'
    } else{
        winner = 'tie'
    }
            
    updateOutput(winner,playerChoice,computerChoice)
    
}

function updateScores() {
    player.textContent = `player score: ${playerScore}`;
    computer.textContent = `computer score: ${computerScore}`;
}

function updateChoices(playerChoice, computerChoice){
    const pChoiceImg = document.getElementById('pChoiceImg')
    const cChoiceImg = document.getElementById('cChoiceImg')

    switch(playerChoice){
        case "rock":
            pChoiceImg.src = 'images/rock.png'
            break
        case "paper":
            pChoiceImg.src = 'images/paper.png'
            break
        case "scissors":
            pChoiceImg.src = 'images/scissors.png'
            break
    }

    switch(computerChoice){
        case "rock":
            cChoiceImg.src = 'images/rock.png'
            break
        case "paper":
            cChoiceImg.src = 'images/paper.png'
            break
        case "scissors":
            cChoiceImg.src = 'images/scissors.png'
            break
    }
}

function updateOutput(winner, playerChoice, computerChoice){
    if(playerScore===5){
        output.textContent = "you won :D"
        showResetBtn();
    } else if(computerScore===5){
        output.textContent = "you lost :("
        showResetBtn();
    } else {
        if(winner === 'player'){
            output.textContent = `you win! ${playerChoice} beats ${computerChoice}`
        } else if(winner==='computer'){
            output.textContent = `you lose! ${computerChoice} beats ${playerChoice}`
        } else {
            output.textContent = `it's a tie. ${computerChoice} ties with ${playerChoice}`
        }
    }   
}

function resetGame(){
    hideResetBtn();
    const pChoiceImg = document.getElementById('pChoiceImg')
    const cChoiceImg = document.getElementById('cChoiceImg')

    output.textContent = 'first to score 5 points wins!'
    playerScore = 0;
    computerScore = 0;
    winner = "";
    pChoiceImg.src = 'images/q-mark.png'
    cChoiceImg.src = 'images/q-mark.png'

    updateScores();
}

function showResetBtn(){
    resetBtn.style.display = 'block';
    buttons.forEach((button)=>{
        button.classList.add("disabled-button")
    })
}

function hideResetBtn() {
    resetBtn.style.display = 'none';
    buttons.forEach((button)=>{
        button.classList.remove("disabled-button")
    })
}
