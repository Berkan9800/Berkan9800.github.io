let signCounter = 0;
let playerXScoreCounter = 0;
let playerOScoreCounter = 0;

const boxes = document.querySelectorAll('.box');
const playerXScore = document.querySelector('#player-x-score');
const playerOScore = document.querySelector('#player-o-score');

boxes.forEach((box) => {
    box.addEventListener('click', addSign)  
})

function addSign(event) {
    const choices = ['X', 'O'];
    if (signCounter % 2 == 0 && event.target.id == 'false') {
        event.target.textContent = choices[0]
        event.target.id = 'true';
        signCounter++;
    } if (signCounter % 2 != 0 && event.target.id == 'false') {
        event.target.textContent = choices[1];
        event.target.id = 'true';
        signCounter++;
    }

    checkWinPlayerX();
    checkWinPlayerO();

}


function checkWinPlayerX() {
    const inputValues = [];
    const possibleWinXOne = JSON.stringify(['X', 'X', 'X']);

    boxes.forEach((box) => {
        inputValues.push(box.textContent);
    })
    
    if (JSON.stringify(inputValues.slice(0, 3)) === possibleWinXOne || 
        JSON.stringify(inputValues.slice(3, 6)) === possibleWinXOne || 
        JSON.stringify(inputValues.slice(6, 9)) === possibleWinXOne) 
    {
        playerXScoreCounter++;
        playerXScore.textContent = playerXScoreCounter;
        deleteAllSigns();
    }

    if (inputValues[0] == 'X' && inputValues[3] == 'X' && inputValues[6] == 'X') {
        playerXScoreCounter++;
        playerXScore.textContent = playerXScoreCounter;
        deleteAllSigns();
    }
    if (inputValues[1] == 'X' && inputValues[4] == 'X' && inputValues[7] == 'X') {
        playerXScoreCounter++;
        playerXScore.textContent = playerXScoreCounter;
        deleteAllSigns();
    } 
    if (inputValues[2] == 'X' && inputValues[5] == 'X' && inputValues[8] == 'X') {
        playerXScoreCounter++;
        playerXScore.textContent = playerXScoreCounter;
        deleteAllSigns();
    } if (inputValues[0] == 'X' && inputValues[4] == 'X' && inputValues[8] == 'X') {
        playerXScoreCounter++;
        playerXScore.textContent = playerXScoreCounter;
        deleteAllSigns();
    } if (inputValues[2] == 'X' && inputValues[4] == 'X' && inputValues[6] == 'X') {
        playerXScoreCounter++;
        playerXScore.textContent = playerXScoreCounter;
        deleteAllSigns();
    } 

}


function checkWinPlayerO() {
    const inputValues = [];
    const possibleWinOOne = JSON.stringify(['O', 'O', 'O']);


    boxes.forEach((box) => {
        inputValues.push(box.textContent);
    })




    if (JSON.stringify(inputValues.slice(0, 3)) === possibleWinOOne || 
        JSON.stringify(inputValues.slice(3, 6)) === possibleWinOOne || 
        JSON.stringify(inputValues.slice(6, 9)) === possibleWinOOne) 
    {
        playerOScoreCounter++;
        playerOScore.textContent = playerOScoreCounter;
        deleteAllSigns();
    }

    if (inputValues[0] == 'O' && inputValues[3] == 'O' && inputValues[6] == 'O') {
        playerOScoreCounter++;
        playerOScore.textContent = playerOScoreCounter;
        deleteAllSigns();
    }
    if (inputValues[1] == 'O' && inputValues[4] == 'O' && inputValues[7] == 'O') {
        playerOScoreCounter++;
        playerOScore.textContent = playerOScoreCounter;
        deleteAllSigns();
    } 
    if (inputValues[2] == 'O' && inputValues[5] == 'O' && inputValues[8] == 'O') {
        playerOScoreCounter++;
        playerOScore.textContent = playerOScoreCounter;
        deleteAllSigns();
    } if (inputValues[0] == 'O' && inputValues[4] == 'O' && inputValues[8] == 'O') {
        playerOScoreCounter++;
        playerOScore.textContent = playerOScoreCounter;
        deleteAllSigns();
    } if (inputValues[2] == 'O' && inputValues[4] == 'O' && inputValues[6] == 'O') {
        playerOScoreCounter++;
        playerOScore.textContent = playerOScoreCounter;
        deleteAllSigns();
    } 
}


function deleteAllSigns() {
    boxes.forEach((box) => {
        box.textContent = '';
        box.id = 'false';
    })
}