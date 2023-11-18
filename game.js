let player_choice;
let computer_choice;
let player_score = 0;
let computer_score = 0;

let choice;
let winner;

const reset_btn = document.getElementById('reset-btn')
const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
const output = document.querySelector('.output');
const buttons = document.querySelectorAll(".btn");

reset_btn.addEventListener('click', reset_game)
player.textContent = `player score: ${player_score}`
computer.textContent = `computer score: ${computer_score}`

//BUTTONS
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        player_choice = button.id;
        computer_choice = (computer_selection())
        play_round();
        update_scores();
        update_choices(player_choice, computer_choice);
    })
})

//PLAY ROUND
function play_round(){
    if(
        (player_choice === "rock" && computer_choice === "scissors") ||
        (player_choice  === "paper" && computer_choice === "rock") ||
        (player_choice === "scissors" && computer_choice === "paper")
    ){
        player_score++
        winner = 'player'
    } else if(
        (player_choice === "rock" && computer_choice === "paper") ||
        (player_choice === "paper" && computer_choice === "scissors") ||
        (player_choice === "scissors" && computer_choice === "rock")
    ){
        computer_score++
        winner = 'computer'
    } else{
        winner = 'tie'
    }
            
    update_output(winner,player_choice,computer_choice)
    
}

function computer_selection(){
    let rand_num = Math.floor(Math.random()*3);

    if(rand_num === 0){
        choice = "rock";
    } else if(rand_num === 1){
        choice = "paper";
    } else if (rand_num === 2){
        choice = "scissors"
    }

    return choice;
}

//UPDATES
function update_scores() {
    player.textContent = `player score: ${player_score}`;
    computer.textContent = `computer score: ${computer_score}`;
}

function update_choices(player_choice, computer_choice){
    const player_img = document.getElementById('player-img')
    const computer_img = document.getElementById('computer-img')

    switch(player_choice){
        case "rock":
            player_img.src = 'images/rock.png'
            break
        case "paper":
            player_img.src = 'images/paper.png'
            break
        case "scissors":
            player_img.src = 'images/scissors.png'
            break
    }

    switch(computer_choice){
        case "rock":
            computer_img.src = 'images/rock.png'
            break
        case "paper":
            computer_img.src = 'images/paper.png'
            break
        case "scissors":
            computer_img.src = 'images/scissors.png'
            break
    }
}

function update_output(winner, player_choice, computer_choice){
    if(player_score===5){
        output.textContent = "you won :D"
        show_reset_btn();
    } else if(computer_score===5){
        output.textContent = "you lost :("
        show_reset_btn();
    } else {
        if(winner === 'player'){
            output.textContent = `you win! ${player_choice} beats ${computer_choice}`
        } else if(winner==='computer'){
            output.textContent = `you lose! ${computer_choice} beats ${player_choice}`
        } else {
            output.textContent = `it's a tie. ${computer_choice} ties with ${player_choice}`
        }
    }   
}

//RESET GAME
function reset_game(){
    hide_reset_btn();
    const player_img = document.getElementById('player-img')
    const computer_img = document.getElementById('computer-img')

    output.textContent = 'first to score 5 points wins!'
    player_score = 0;
    computer_score = 0;
    winner = "";
    player_img.src = 'images/q-mark.png'
    computer_img.src = 'images/q-mark.png'

    update_scores();
}

function show_reset_btn(){
    reset_btn.style.display = 'block';
    buttons.forEach((button)=>{
        button.classList.add("disabled-button")
    })
}

function hide_reset_btn() {
    reset_btn.style.display = 'none';
    buttons.forEach((button)=>{
        button.classList.remove("disabled-button")
    })
}
