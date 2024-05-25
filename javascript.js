function getComputerChoice() {
    let value = Math.random() * 3
    let choice
    if (value < 1) {
        choice = 'rock'
    } else if (value < 2) {
        choice = 'paper'
    } else {
        choice = 'scissor'
    }

    return choice
}

function getHumanChoice(value) {
    value = value.toLowerCase()
    if (value == 'rock' || 'paper' || 'scissor') {
        return value
    } else {
        console.log('choose a valid option.')
    }
}

let humanScore = 0
let computerScore = 0
let rounds = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        computerScore++
        humanScore++
        return "it's a tie!"
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++
        return "you lose! Paper beats Rock."
    } else if (humanChoice == 'rock' && computerChoice == 'scissor') {
        humanScore++
        return "you win! Rock beats Scissor."
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++
        return "you win! Paper beats Rock."
    } else if (humanChoice == 'paper' && computerChoice == 'scissor') {
        computerScore++
        return "you lose! Scissor beats Paper."
    } else if (humanChoice == 'scissor' && computerChoice == 'paper') {
        humanScore++
        return "you win! Scissor beats Paper."
    } else if (humanChoice == 'scissor' && computerChoice == 'rock') {
        computerScore++
        return "you lose! Rock beats Scissor."
    }
}

const paper = document.querySelector("#paper")
const rock = document.querySelector("#rock")
const scissor = document.querySelector("#scissor")

const score = document.querySelector("#score")
const result = document.querySelector("#result")

function playGames(humanSelection) {
    const computerSelection = getComputerChoice();
    roundResult = playRound(humanSelection, computerSelection)
    score.textContent = roundResult + `Your score is ${humanScore} and the computer score is ${computerScore}`
    rounds++
    if (rounds == 5) {
        if (humanScore > computerScore) {
            result.textContent = "you WIN!"
        } else if (humanScore < computerScore) {
            result.textContent = "you LOST!"
        } else {
            result.textContent = "It's a TIE!"
        }
        humanScore = 0
        computerScore = 0
    } else if (rounds > 5) {
        result.textContent = ''
        rounds = 1
    }
}

paper.addEventListener("click", () => playGames('paper'))
rock.addEventListener("click", () => playGames('rock'))
scissor.addEventListener("click", () => playGames('scissor'))