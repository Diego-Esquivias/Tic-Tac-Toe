// Creates variables that'll be used/updated throughout
var playerTurn = 0
var xWins = 0
var oWins = 0

var winningCombinations

// Adds X or O to the button clicked depending on who's turn it is and makes that button unclickable to prevent errors
const addText = (id) => {
    
    if ((playerTurn % 2) == 0) {
        document.getElementById(String(id)).textContent = "X"
        document.getElementById(String(id)).style.color = "#454B1B"
        document.getElementById(String(id)).disabled = true
        document.getElementById("turn").innerHTML = "Player: O"
        playerTurn += 1
        document.getElementById("turns").innerHTML = "Turns: " + playerTurn
    } else {
        document.getElementById(String(id)).textContent = "O"
        document.getElementById(String(id)).style.color = "#454B1B"
        document.getElementById(String(id)).disabled = true
        document.getElementById("turn").innerHTML = "Player: X"
        playerTurn += 1
        document.getElementById("turns").innerHTML = "Turns: " + playerTurn
    }

    // Creates a list of all the possible winning combinations that'll be used to see who wins
    winningCombinations = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['3', '6', '9'],
        ['1', '5', '9'],
        ['3', '5', '7'] 
    ];

    // Gives the function a slight delay before running to make sure the rest of the code above is run first
    setTimeout(winChecker, 100);
}

// Loops through the winningCombinations list and checks if each box is either all X or all O or a tie
const winChecker = () => {
    let isWin = false

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (document.getElementById(a).textContent === 'X' && document.getElementById(b).textContent === 'X' && document.getElementById(c).textContent === 'X') {
            highlightWinningBoxes(i)
            setTimeout(xWon, 100)
            isWin = true
        } else if (document.getElementById(a).textContent === 'O' && document.getElementById(b).textContent === 'O' && document.getElementById(c).textContent === 'O') {
            highlightWinningBoxes(i)
            setTimeout(oWon, 100)
            isWin = true
        }
    }

    if (!isWin && playerTurn === 9) {
        setTimeout(tie, 100);
    }

}

// When is winner is found it highlights the boxes that won
const highlightWinningBoxes = (winningIndex) => {
    const [a, b, c] = winningCombinations[winningIndex];
    document.getElementById(a).style.backgroundColor = "#e5e8c3";
    document.getElementById(b).style.backgroundColor = "#e5e8c3";
    document.getElementById(c).style.backgroundColor = "#e5e8c3";
}

// If Player X wins, tell the user to play again or cancel
const xWon = () => {
    // If user wants to play again, reset everything and update the winning score for X on the bottom of the screen
    if (confirm("Player X wins! Press ok to play again or cancel to stop")) {
        var elements = document.getElementsByClassName("btn")
        for (var i = 0; i < elements.length; i++) {
            elements[i].textContent = "_"
            elements[i].style.color = "#97988a"
            elements[i].style.backgroundColor = "#97988a"
            elements[i].disabled = false
        }
        document.getElementById("turn").innerHTML = "Player: X"
        xWins += 1
        document.getElementById("xWins").innerHTML = "X - " + xWins + " wins"
        playerTurn = 0
        document.getElementById("turns").innerHTML = "Turns: " + playerTurn
    } else {
        // If they cancel, it reloads the whole page
        location.reload(true)
    }
}

// If Player O wins, tell the user to play again or cancel
const oWon = () => {
    // If user wants to play again, reset everything and update the winning score for O on the bottom of the screen
    if (confirm("Player O wins! Press ok to play again or cancel to stop")) {
        var elements = document.getElementsByClassName("btn")
        for (var i = 0; i < elements.length; i++) {
            elements[i].textContent = "_"
            elements[i].style.color = "#97988a"
            elements[i].style.backgroundColor = "#97988a"
            elements[i].disabled = false
        }
        oWins += 1
        document.getElementById("oWins").innerHTML = "O - " + oWins + " wins"
        playerTurn = 0
        document.getElementById("turns").innerHTML = "Turns: " + playerTurn
    } else {
        // If they cancel, it reloads the whole page
        location.reload(true)
    }
}

// If they tie, tell the user to play again or cancel
const tie = () => {
    playerTurn = 0
    // If user wants to play again, reset everything and doesn't update the scores on the bottom of the screen
    if (confirm("It's a tie! Press ok to play again or cancel to stop")) {
        var elements = document.getElementsByClassName("btn")
        for (var i = 0; i < elements.length; i++) {
            elements[i].textContent = "_"
            elements[i].style.color = "#97988a"
            elements[i].style.backgroundColor = "#97988a"
            elements[i].disabled = false
        }
        document.getElementById("turns").innerHTML = "Turns: " + playerTurn
    } else {
        // If they cancel, it reloads the whole page
        location.reload(true)
    }
}