'use strict'





const game = function () {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;


const playRound = function () {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const playerSelection = [rockBtn, paperBtn, scissorsBtn];
    const computerSelection = ['rock', 'paper', 'scissors'];
    


playerSelection.forEach(selection => {
    selection.addEventListener('click', function() {
        const roundsLeft = document.querySelector('.roundsLeft');
        rounds++;
        roundsLeft.innerText = `Rounds Left: ${5-rounds}`;

        const signNumber = Math.floor(Math.random()*3);
        const cpuSelection = computerSelection[signNumber];

        winner(this.innerText, cpuSelection)

        if(rounds == 5) {
            gameEnd(playerSelection, roundsLeft);
        }
    })
})
}

const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreCount = document.querySelector('.p-count');
    const computerScoreCount = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'Draw!'
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreCount.textContent = computerScore;

        }else{
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreCount.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreCount.textContent = playerScore;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreCount.textContent = playerScore;
        }
    }
}

const gameEnd = (playerSelection,roundsLeft) => {
 
    const chooseSign = document.querySelector('.choose');
    const result = document.querySelector('.result');
    const restartBtn = document.querySelector('.restart');

    playerSelection.forEach(selection => {
        selection.style.display = 'none';
    })

  
    chooseSign.innerText = 'Game Over!'
    chooseSign.style.fontSize = '8rem'
    roundsLeft.style.display = 'none';
    document.querySelector('.score').style.display = 'none';

    if(playerScore > computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game'
        result.style.color = '#308D46';
    }
    else if(playerScore < computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }
    else{
        result.style.fontSize = '2rem';
        result.innerText = 'Draw!';
        result.style.color = 'grey'
    }
    restartBtn.innerHTML= '<i class="fas fa-redo-alt fa-7x"></i>';
    restartBtn.style.display = 'flex'
    restartBtn.addEventListener('click',() => {
        window.location.reload();
    })
}

    playRound(); 

}

game();
    
 

