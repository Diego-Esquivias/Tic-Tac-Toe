var playerTurn = 0
var xWins = 0
var oWins = 0

var winningCombinations


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

const highlightWinningBoxes = (winningIndex) => {
    const [a, b, c] = winningCombinations[winningIndex];
    document.getElementById(a).style.backgroundColor = "#AFE1AF";
    document.getElementById(b).style.backgroundColor = "#AFE1AF";
    document.getElementById(c).style.backgroundColor = "#AFE1AF";
}

const xWon = () => {
    if (confirm("Player X wins! Press ok to play again or cancel to stop")) {
        var elements = document.getElementsByClassName("btn")
        for (var i = 0; i < elements.length; i++) {
            elements[i].textContent = "_"
            elements[i].style.color = "#97988a"
            elements[i].style.backgroundColor = "#97988a"
            elements[i].disabled = false
        }
        document.getElementsByClassName("turn").innerHTML = "Player: O"
        xWins += 1
        document.getElementById("xWins").innerHTML = "X - " + xWins + " wins"
        playerTurn = 0
        document.getElementById("turns").innerHTML = "Turns: " + playerTurn
    } else {
        location.reload(true)
    }
}

const oWon = () => {
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
        location.reload(true)
    }
}

const tie = () => {
    playerTurn = 0
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
        location.reload(true)
    }
}