var playerTurn = 0
var xWins = 0
var oWins = 0

var box1
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var box9

var winningCombinations


const addText = (id) => {
    
    if ((playerTurn % 2) == 0) {
        document.getElementById(String(id)).textContent = "X"
        document.getElementById(String(id)).style.color = "#454B1B"
        document.getElementById(String(id)).disabled = true
        document.getElementById("turn").innerHTML = "Player: O"
        playerTurn += 1
        document.getElementById("turns").innerHTML = "Turn: " + playerTurn
    } else {
        document.getElementById(String(id)).textContent = "O"
        document.getElementById(String(id)).style.color = "#454B1B"
        document.getElementById(String(id)).disabled = true
        document.getElementById("turn").innerHTML = "Player: X"
        playerTurn += 1
        document.getElementById("turns").innerHTML = "Turn: " + playerTurn
    }
    box1 = document.getElementById("1").textContent
    box2 = document.getElementById("2").textContent
    box3 = document.getElementById("3").textContent
    box4 = document.getElementById("4").textContent
    box5 = document.getElementById("5").textContent
    box6 = document.getElementById("6").textContent
    box7 = document.getElementById("7").textContent
    box8 = document.getElementById("8").textContent
    box9 = document.getElementById("9").textContent

    winningCombinations = [
        [box1, box2, box3], 
        [box4, box5, box6], 
        [box7, box8, box9],
        [box1, box4, box7], 
        [box2, box5, box8], 
        [box3, box6, box9], 
        [box1, box5, box9], 
        [box3, box5, box7]  
    ];

    // Gives the function a slight delay before running to make sure the rest of the code above is run first
    setTimeout(winChecker, 100);
}

const winChecker = () => {
    console.log(winningCombinations)
    // if ((box1 === "X") && (box2 === "X") && (box3 === "X")) {
    //     if (confirm("Player X wins! Press ok to play again or cancel to stop")) {
    //         location.reload(true)
    //     } else {
    //         alert("Bye")
    //     }
    // } else if ((box1 === "O") && (box2 === "O") && (box3 === "O")) {
    //     if (confirm("Player O wins! Press ok to play again or cancel to stop")) {
    //         location.reload(true)
    //     } else {
    //         alert("Bye")
    //     }
    // } else if ((box1 === "O") && (box5 === "O") && (box9 === "O")) {
    //     if (confirm("Player O wins! Press ok to play again or cancel to stop")) {
    //         location.reload(true)
    //     } else {
    //         alert("Bye")
    //     }
    // }

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (a === 'X' && b === 'X' && c === 'X') {
            if (confirm("Player X wins! Press ok to play again or cancel to stop")) {
                location.reload(true)
            } else {
                alert("Bye")
            }
        } else if (a === 'O' && b === 'O' && c === 'O') {
            if (confirm("Player O wins! Press ok to play again or cancel to stop")) {
                location.reload(true)
            } else {
                alert("Bye")
            }
        }
    }
}