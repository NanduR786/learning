const subt = document.querySelector(".guessSubmit")
const actualNum = Math.round((Math.random() * 100) + 1)
console.log(actualNum)
const previousGuesses = document.querySelector(".guesses")
const guessedNums = []

const guessesRemainingField = document.querySelector(".lastResult")
const guessesRemaining = document.querySelector(".lastResult")
const output = document.querySelector(".lowOrHi")
const guessedField = document.getElementById("guessField")

subt.addEventListener('click', function (e) {
    e.preventDefault()
    let guessedText = parseInt(guessedField.value)
    if(parseInt(guessesRemaining.textContent)>0){
        if (guessedText === actualNum) {
            output.innerHTML = "Hurray!"
            guessedField.value = ""
        } else {
            guessedField.value = ""
            output.innerHTML = "Try again buddy!"
            const newGuessCount = parseInt(guessesRemaining.textContent) - 1
            guessesRemaining.textContent = newGuessCount
            guessedNums.push(guessedText)
            previousGuesses.textContent = guessedNums.join(", ")
        }
    }else{
        guessedField.value = ""
        output.innerHTML = "Chances Over!"
    }
})

