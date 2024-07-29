var number = document.getElementsByClassName("ip-btn");
let isX = true;
let winner = false;
    for (let index = 0; index < number.length; index++) {
        number[index].addEventListener("click", function(evt){
           if (evt.target.value !== 'X' && evt.target.value !== 'O')
               { if (isX === true) {
                    evt.target.value = 'X';
                } else if (isX === false){
                    evt.target.value = 'O';
                }
                //has to be placed inside the if block to toggle only when valid move is made
                //i.e if the button clicked is not an X or an O then you toggle
                //Otherwise if it is placed out it will toggle even if button is already X or O
                isX = !isX;
            }
            checkResult();
        //     if( (number[0].value === 'X' && number[1].value === 'X' && number[2].value === 'X') || 
        //         (number[3].value === 'X' && number[4].value === 'X' && number[5].value === 'X') || 
        //         (number[6].value === 'X' && number[7].value === 'X' && number[8].value === 'X') ||
        //         (number[0].value === 'X' && number[3].value === 'X' && number[6].value === 'X') || 
        //         (number[1].value === 'X' && number[4].value === 'X' && number[7].value === 'X') || 
        //         (number[2].value === 'X' && number[5].value === 'X' && number[8].value === 'X') ||
        //         (number[0].value === 'X' && number[4].value === 'X' && number[8].value === 'X') ||
        //         (number[2].value === 'X' && number[4].value === 'X' && number[6].value === 'X')){
        //         var inputResult = document.getElementById("displayInfo");
        //         inputResult.value = "X Wins!"
        //     }
        //     else if((number[0].value === 'O' && number[1].value === 'O' && number[2].value === 'O') || 
        //             (number[3].value === 'O' && number[4].value === 'O' && number[5].value === 'O') || 
        //             (number[6].value === 'O' && number[7].value === 'O' && number[8].value === 'O') ||
        //             (number[0].value === 'O' && number[3].value === 'O' && number[6].value === 'O') || 
        //             (number[1].value === 'O' && number[4].value === 'O' && number[7].value === 'O') || 
        //             (number[2].value === 'O' && number[5].value === 'O' && number[8].value === 'O') ||
        //             (number[0].value === 'O' && number[4].value === 'O' && number[8].value === 'O') || 
        //             (number[2].value === 'O' && number[4].value === 'O' && number[6].value === 'O')){
        //     var inputResult = document.getElementById("displayInfo");
        //     inputResult.value = "O Wins!"
        // }
             
        })       
    }

    function checkResult(){
        if( (number[0].value === 'X' && number[1].value === 'X' && number[2].value === 'X') || 
        (number[3].value === 'X' && number[4].value === 'X' && number[5].value === 'X') || 
        (number[6].value === 'X' && number[7].value === 'X' && number[8].value === 'X') ||
        (number[0].value === 'X' && number[3].value === 'X' && number[6].value === 'X') || 
        (number[1].value === 'X' && number[4].value === 'X' && number[7].value === 'X') || 
        (number[2].value === 'X' && number[5].value === 'X' && number[8].value === 'X') ||
        (number[0].value === 'X' && number[4].value === 'X' && number[8].value === 'X') ||
        (number[2].value === 'X' && number[4].value === 'X' && number[6].value === 'X')){
        var inputResult = document.getElementById("displayInfo");
        winner = true;
        console.log(winner);
        inputResult.value = "X Wins!"
    }
    else if((number[0].value === 'O' && number[1].value === 'O' && number[2].value === 'O') || 
            (number[3].value === 'O' && number[4].value === 'O' && number[5].value === 'O') || 
            (number[6].value === 'O' && number[7].value === 'O' && number[8].value === 'O') ||
            (number[0].value === 'O' && number[3].value === 'O' && number[6].value === 'O') || 
            (number[1].value === 'O' && number[4].value === 'O' && number[7].value === 'O') || 
            (number[2].value === 'O' && number[5].value === 'O' && number[8].value === 'O') ||
            (number[0].value === 'O' && number[4].value === 'O' && number[8].value === 'O') || 
            (number[2].value === 'O' && number[4].value === 'O' && number[6].value === 'O')){
    var inputResult = document.getElementById("displayInfo");
    winner = true;
    console.log(winner);
    inputResult.value = "O Wins!"
} 
else if(winner === false){
    for (let i = 0; i < number.length; i++) {
        if (number[i].value !== 'X' && number[i].value !== 'O') {
            return false;
        }
    }
    var inputResult = document.getElementById("displayInfo");
inputResult.value = "It's A Draw!"
}
    }

    function Clear(){
        window.location.reload();
    }