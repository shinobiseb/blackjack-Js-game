let dealerNum = 0
let playerNum = 0

let turn = 0

const dealerScore = document.getElementById("dealerNum")
const playerScore = document.getElementById("playerNum")

function cardGen() {
    return Math.floor((Math.random() * 12) + 1)
}

function turnIncrement() {
    if (turn === 3) {
        return turn = 1
    } else {
        return turn++
    }
}

function play() {
    const dealerTurn = cardGen()
    dealerScore.innerText = dealerNum + dealerTurn

    const playerTurn = cardGen()
    playerScore.innerText = playerNum + playerTurn

    turnIncrement()
    console.log(turn)
}

const playButt = document.getElementById("playButt")

playButt.addEventListener("click", play)