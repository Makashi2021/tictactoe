// Tic Tac Toe
const prompt = require('prompt-sync')();



function print(message) {
    console.log(message);
}


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

function getBotInput(difficulty, round) {
    print("Bot's turn");
    if (difficulty == 1) {
        print("Difficulty: Easy");
        let row = Math.floor(Math.random() * 3);
        let col = Math.floor(Math.random() * 3);
        while (!isValid(row, col)) {
            row = Math.floor(Math.random() * 3);
            col = Math.floor(Math.random() * 3);
        }
        return [row, col];
    } else if (difficulty == 2) {
        print("Difficulty: Hard");
        if (round == 1) {
            print("ROUND 1!")
            if (board[0][0] == ' ') {
                return [0, 0];
            } else if (board[0][2] == ' ') {
                return [0, 2];
            } else if (board[2][0] == ' ') {
                return [2, 0];
            } else if (board[2][2] == ' ') {
                return [2, 2];
            }
            print("alive1")
        } else if (round == 2) {
            if (board[0][0] == 'O') {
                if (isValid(0, 2)) {
                    return [0, 2];
                } else if (isValid(2, 0)) {
                    return [2, 0];
                }
            } else if (board[0][2] == 'O') {
                if (isValid(0, 0)) {
                    return [0, 0];
                } else if (isValid(2, 2)) {
                    return [2, 2];
                }
            } else if (board[2][0] == 'O') {
                if (isValid(2, 2)) {
                    return [2, 2];
                } else if (isValid(0, 0)) {
                    return [0, 0];
                }
            } else if (board[2][2] == 'O') {
                if (isValid(2, 0)) {
                    return [2, 0];
                } else if (isValid(0, 2)) {
                    return [0, 2];
                }
            }

        } else if (round == 3) {
            if (board[0][0] == "O" && board[0][2] == "O") {
                if (isValid(2, 0)) {
                    return [2, 0];
                } else if (isValid(2, 2)) {
                    return [2, 2];
                }
            } else if (board[0][0] == "O" && board[2][0] == "O") {
                if (isValid(0, 2)) {
                    return [0, 2];
                } else if (isValid(2, 2)) {
                    return [2, 2];
                }
            } else if (board[0][2] == "O" && board[2][2] == "O") {
                if (isValid(0, 0)) {
                    return [0, 0];
                } else if (isValid(2, 0)) {
                    return [2, 0];
                }
            } else if (board[2][0] == "O" && board[2][2] == "O") {
                if (isValid(0, 0)) {
                    return [0, 0];
                } else if (isValid(0, 2)) {
                    return [0, 2];
                }
            } else if (board[0][0] == "O" && board[2][2] == "O") {
                if (isValid(0, 0)) {
                    return [0, 0];
                } else if (isValid(2, 2)) {
                    return [2, 2];
                }
            } else if (board[0][2] == "O" && board[2][0] == "O") {
                if (isValid(0, 2)) {
                    return [0, 2];
                } else if (isValid(2, 0)) {
                    return [2, 0];
                }
            }
        } else if (round == 4) {
            if (board[2][0] == "O" && board[0][0] == "O" && board[0][2] == "O") {
                if (isValid(1, 0)) {
                    return [1, 0];
                } else if (isValid(0, 1)) {
                    return [0, 1];
                }
            } else if (board[0][0] == "O" && board[0][2] == "O" && board[2][2] == "O") {
                if (isValid(0, 1)) {
                    return [0, 1];
                } else if (isValid(2, 1)) {
                    return [2, 1];
                }
            } else if (board[0][2] == "O" && board[2][2] == "O" && board[2][0] == "O") {
                if (isValid(1, 2)) {
                    return [1, 2];
                } else if (isValid(2, 1)) {
                    return [2, 1];
                }
            } else if (board[2][2] == "0" && board[2][0] && board[0][0] == "O") {
                if (isValid(1, 0)) {
                    return [1, 0];
                } else if (isValid(2, 1)) {
                    return [2, 1];
                }
            }


        }
    }
}

function checkWinner() {
    if (board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][0] != ' ') {
        winner = board[0][0];
        return true, winner;
    } else if (board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][0] != ' ') {
        winner = board[1][0];
        return true, winner;
    } else if (board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][0] != ' ') {
        winner = board[2][0];
        return true, winner;
    } else if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[0][0] != ' ') {
        winner = board[0][0];
        return true, winner;
    } else if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[0][1] != ' ') {
        winner = board[0][1];
        return true, winner;
    } else if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[0][2] != ' ') {
        winner = board[0][2];
        return true, winner;
    } else if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        winner = board[0][0];
        return true, winner;
    } else if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
        winner = board[0][2];
        return true, winner;
    } else {
        return false;
    }
}



function Main(player, gameOver, winner, round, difficulty, bot) {

    printBoard();

    while (!gameOver) {
        let user = getUserInput();
        round += 1;
        let bot = getBotInput(difficulty, round, user);


        board[user[0]][user[1]] = "X";
        print(bot);
        board[bot[0]][bot[1]] = "O";
        printBoard();
        if (checkWinner()[0]) {
            print(checkWinner());
            checkWinner()[0]
            gameOver = true;
            winner = checkWinner()[1];
            print(winner + " wins!");
            if (winner == "X") {
                console.log("You won!");
            } else {
                console.log("You lost!");
            }
        }

    }
    playAgain = prompt("Play again? (y/n)   ");
    if (playAgain == "y") {
        init(bot, difficulty);
    } else if (playAgain == "n") {
        console.log("Goodbye!");
    }


}

function init(bot = true, difficulty = 1) {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    let player = 'X';
    let gameOver = false;
    let winner = null;
    let round = 0;
    if (bot) {
        Main(player, gameOver, winner, round, difficulty, bot);
    }

}

init(true, 2);