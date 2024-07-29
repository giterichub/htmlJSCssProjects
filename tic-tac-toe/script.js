let number = document.getElementsByClassName("ip-btn");
let isX = true;
let winner = false;

// Function to check if a player has won
function checkWin(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    return winConditions.some(condition => {
        return condition.every(index => number[index].value === player);
    });
}

// Function to check if the game is a draw
function checkDraw() {
    return Array.from(number).every(cell => cell.value === 'X' || cell.value === 'O');
}

for (let index = 0; index < number.length; index++) {
    number[index].addEventListener("click", function(evt){
        if (evt.target.value !== 'X' && evt.target.value !== 'O' && !winner) {
            evt.target.value = isX ? 'X' : 'O';
            isX = !isX;

            if(checkWin('X')){
                document.getElementById("displayInfo").value = "X Wins!";
                winner = true;
            } else if (checkWin('O')){
                document.getElementById("displayInfo").value = "O Wins!";
                winner = true;
            } else if (checkDraw()){
                document.getElementById("displayInfo").value = "It's A Draw!";
            }
        }
    })
}

function Clear(){
    window.location.reload();
}