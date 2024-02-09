let playerOneScore = Number(document.querySelector('.result-1').innerHTML);
let playerTwoScore = Number( document.querySelector('.result-2').innerHTML);
let result_1 = document.querySelector('.result-1')
const buttons_1 = document.querySelectorAll('.buttons-1 button')
const buttons_2 = document.querySelectorAll('.buttons-2 button')
let result_2 = document.querySelector('.result-2')
const newGame = document.querySelector('#newGame')
const winner = document.querySelector('#winner')
const bg_1 = document.querySelector('.player-one')
const bg_2 = document.querySelector('.player-two')
const message = document.querySelector(".message ")
const start = document.querySelector("#start-game")
let playerOneButtons = Array.from(buttons_1)
let playerTwoButtons = Array.from(buttons_2)
function startGame(){
// All about player one    
playerOneButtons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        playerOneScore+=Number(e.target.value);
        result_1.innerHTML = playerOneScore
    })
})

// all about player two

playerTwoButtons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        playerTwoScore+=Number(e.target.value);
        result_2.innerHTML = playerTwoScore
    })
})

// Show winner
winner.addEventListener('click',()=>{
    
    message.innerHTML = "";
    if (playerOneScore > playerTwoScore){
        bg_1.classList.add('winner')
        bg_2.classList.add('losser')
    }
    else if(playerOneScore < playerTwoScore){
        bg_1.classList.add('losser')
        bg_2.classList.add('winner')

    }
    else{
        message.innerHTML = "The match is draw 🫥"
        bg_1.classList.add('losser')
        bg_2.classList.add('losser')
    }
      

    disableButtons()
})
}
// Starting new game
newGame.addEventListener('click',()=>{
    playerOneScore = 0;
    playerTwoScore = 0;
    result_1.innerHTML = 0
    result_2.innerHTML = 0
    location.reload() 
})


start.addEventListener("click",()=>{
    startGame()
})

function disableButtons(){
    playerOneButtons.concat(playerTwoButtons).forEach(button=>{
        button.disabled=true
    })
}


