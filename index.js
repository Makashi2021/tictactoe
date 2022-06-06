// Tic Tac Toe
const prompt = require('prompt-sync')();





// Functions
function printBoard() {
    console.log(`
    ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
    ---------
    ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
    ---------
    ${board[2][0]} | ${board[2][1]} | ${board[2][2]}
    `);
}

function isValid(row, col) {
    if (board[row][col] == ' ') {
        return true;
    }
    return false;
}

function getUserInput() {
    let row = prompt("Enter row:    ")
    while (row < 1 || row > 3 || isNaN(row)) {
        row = prompt("Enter row:    ")
    }
    let col = prompt("Enter column:    ")
    while (col < 1 || col > 3 || isNaN(col)) {
        col = prompt("Enter column:    ")
    }
    while (!isValid(row - 1, col - 1)) {
        row = prompt("Enter row:    ")
        while (row < 1 || row > 3 || isNaN(row)) {
            row = prompt("Enter row:    ")
        }
        col = prompt("Enter column:    ")
        while (col < 1 || col > 3 || isNaN(col)) {
            col = prompt("Enter column:    ")
        }
    }
    return [row - 1, col - 1];

}

function getBotInput() {
    let row = Math.floor(Math.random() * 3);
    while (row < 0 || row > 2) {
        row = Math.floor(Math.random() * 3);
    }
    let col = Math.floor(Math.random() * 3);
    while (col < 0 || col > 2) {
        col = Math.floor(Math.random() * 3);
    }
    while (!isValid(row, col)) {
        row = Math.floor(Math.random() * 3);
        while (row < 0 || row > 2) {
            row = Math.floor(Math.random() * 3);
        }
        col = Math.floor(Math.random() * 3);
        while (col < 0 || col > 2) {
            col = Math.floor(Math.random() * 3);
        }
    }
    return [row, col];
}

function checkWinner() {
    if (board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][0] != ' ') {
        winner = board[0][0];
        return true;
    } else if (board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][0] != ' ') {
        winner = board[1][0];
        return true;
    } else if (board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][0] != ' ') {
        winner = board[2][0];
        return true;
    } else if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[0][0] != ' ') {
        winner = board[0][0];
        return true;
    } else if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[0][1] != ' ') {
        winner = board[0][1];
        return true;
    } else if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[0][2] != ' ') {
        winner = board[0][2];
        return true;
    } else if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        winner = board[0][0];
        return true;
    } else if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
        winner = board[0][2];
        return true;
    } else {
        return false;
    }
}



function Main() {

    printBoard();

    while (!gameOver) {
        let user = getUserInput();
        let bot = getBotInput();
        if (user == bot) {
            let bot = getBotInput();
        }

        board[user[0]][user[1]] = "X";
        board[bot[0]][bot[1]] = "O";
        printBoard();
        if (checkWinner()) {
            gameOver = true;
            if (winner == "X") {
                console.log("You won!");
            } else {
                console.log("You lost!");
            }
        }

    }
    playAgain = prompt("Play again? (y/n)   ");
    if (playAgain == "y") {
        reset();
    } else if (playAgain == "n") {
        console.log("Goodbye!");
    }


}

function Start() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    player = 'X';
    gameOver = false;
    winner = null;
    Main();
}

Start();