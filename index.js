let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")


function startGame() {
    if (sum <= 20) {
        message ="Do you want to draw a new card"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true 
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
        // if sum > 21 can be neglected since we have already given several dependencies
    // } else {
    //     console.log("You're out of the game!")
    // }
    
    // CASH OUT!
    messageEl.textContent = message
}
