function getComputerChoice () {
    let value = Math.random() * 3
    let choice
    if (value < 1) {
        choice = 'rock'
    }else if (value < 2){
        choice = 'paper'
    }else{
        choice = 'scissor'
    }

    return choice
}

function getHumanChoice(value){
    value = value.toLowerCase()
    if (value == 'rock' || 'paper' || 'scissor'){
        return value
    } else {
        console.log('choose a valid option.')
    }
}

let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        console.log("it's a tie!")
    }else if(humanChoice == 'rock' && computerChoice == 'paper'){
        console.log("you lose! Paper beats Rock")
        computerScore ++
    } else if(humanChoice == 'rock' && computerChoice == 'scissor'){
        console.log("you win! Rock beats Scissor")
        humanScore ++
    }else if(humanChoice == 'paper' && computerChoice == 'rock'){
        console.log("you win! Paper beats Rock")
        humanScore ++
    }else if(humanChoice == 'paper' && computerChoice == 'scissor'){
        console.log("you lose! Scissor beats Paper")
        computerScore ++
    }else if(humanChoice == 'scissor' && computerChoice == 'paper'){
        console.log("you win! Scissor beats Paper")
        humanScore ++
    }else if(humanChoice == 'scissor' && computerChoice == 'rock'){
        console.log("you lose! Rock beats Scissor")
        computerScore ++
    }
}

function playGames () {
    for (let i=0; i<5; i++){
        const humanSelection = getHumanChoice(prompt('put in your choice: paper, rock or scissors'));
        const computerSelection = getComputerChoice();
        console.log('the computer puts ' + computerSelection); 
        playRound(humanSelection, computerSelection);
    }
    if (humanScore>computerScore) {
        console.log('you WIN!')
    }else if(humanScore<computerScore){
        console.log('you LOSE!')
    }else{
        console.log("it's a TIE!")
    }
}

playGames()