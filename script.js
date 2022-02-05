'use strict'

const play = ['rock', 'paper', 'scissors']

const computerPlay = function(cpu) {
    return cpu = play[Math.floor(Math.random()*play.length)];

}


const selection = window.prompt('Select: ')


const playRound = function(playerSelection, computerSelection) {
    playerSelection = selection.toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win: Rock beats Scissors'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose: Paper beats Rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose: Scissors beat Paper'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win: Paper beats Rock'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose: Rock beats Scissors'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win: Scissors beat Paper'
    }
    else if (playerSelection === computerSelection){
        return 'Draw!'
    }
    else {
        return 'Wrong input, try again!'
    }
}

console.log(playRound())