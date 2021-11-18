//variables ;)
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

//the stuff below is not done
// let player = {
//   name: "User",
//   chips: 0
// }

// let playerEl = document.querySelector("#player-el")
// playerEl.textContent = player.name + ": $" + player.chips

// randomly generates a card from 1-13 including 1 & 13
function getRandomCard() {

  let randomNumber = Math.floor( Math.random()*13 ) + 1 

  //changes randomNumber to fullfill blackjack rules
  if (randomNumber > 10) {
      return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
      return randomNumber
  }

}

// made for startGame button so it's on-click can still be startGame()instead of renderGame()

function startGame() {
  //sets is Alive to true now cause your playing the game
  isAlive = true

  //generates your first two cards and stores in cards array, also sets the sum to the first + second card
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()  
}

function renderGame() {
  // takes cardsEl and sets in content to "Cards: "
  cardsEl.textContent = "Cards: " 

  // A for loop that uses the previous declaration and adds the new card from the cards array based on card length
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  //takes sumEl and sets it to the words sum and what ever the sum is.
  sumEl.textContent = "Sum: " + sum

  //renders what your status in the game is, using if statments
  if (sum <= 20) {    
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }

  //then prints your game status onto the screen  
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
      //declare a new variable, card and uses the getRandomCard() to set its random value
  let card = getRandomCard()
  sum += card
  //pushes this new card into the cards array
  cards.push(card)

  //uses the rendeGame() to check your new Game Status
  renderGame()
  }
}

