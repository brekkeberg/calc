let screenOutput = "";
let firstNumber = "";
let secondNumber = "";
let firstOperator = "";
let secondOperator = "";
let solution = "";
let whereToStoreString = "FIRST_NUMBER";

const screen = document.querySelector('.screen');
const buttonNumber = document.querySelectorAll('.buttonNumber');
const buttonOperator = document.querySelectorAll('.buttonOperator');
const buttonClear = document.querySelector('.buttonClear');
const buttonEquals = document.querySelector('.buttonEquals');
const buttonBackspace = document.querySelector('.buttonBackspace');

//creates event listener for all buttons
for (let i = 0; i <= buttonNumber.length - 1; i++){
    buttonNumber[i].addEventListener('click', storeNumber);
}
for (let i = 0; i <= buttonOperator.length - 1; i++){
    buttonOperator[i].addEventListener('click', storeOperator);
}
buttonClear.addEventListener('click', clearScreen);
buttonEquals.addEventListener('click', compute);
buttonBackspace.addEventListener('click', backspace);


function storeNumber(){
    screenOutput += this.innerText;
    screen.innerText = screenOutput;
    if (whereToStoreString === "FIRST_NUMBER"){
        firstNumber += this.innerText;
    } else if (whereToStoreString === "SECOND_NUMBER") {
        secondNumber += this.innerText;
    }
    displayStatus()
}

function backspace(){
    screenOutput = screenOutput.slice(0 , -1);
    screen.innerText = screenOutput;
    //check contents of each variable to prioritize data to clear
    if (secondNumber !== ""){
        secondNumber = secondNumber.slice(0 , -1);
        whereToStoreString = "SECOND_NUMBER";
    } else if (firstOperator !== ""){
        firstOperator = firstOperator.slice(0, -1);
        whereToStoreString = "FIRST_OPERATOR";
    } else if (firstNumber !== ""){
        firstNumber = firstNumber.slice(0, -1);
        whereToStoreString = "FIRST_NUMBER";
    }
    displayStatus()
}

function storeOperator(){
    screenOutput += this.innerText;
    screen.innerText = screenOutput
    whereToStoreString = "FIRST_OPERATOR";
    if (whereToStoreString === "FIRST_OPERATOR"){
        firstOperator = this.innerText;   
    } else if (whereToStoreString = "SECOND_OPERATOR") {
        secondOperator = this.innerText;
    }
    whereToStoreString = "SECOND_NUMBER"
    displayStatus()
}



function displayStatus(){
    console.log("First #: " + firstNumber)
    console.log("Second #: " + secondNumber)
    console.log("First Operator: " + firstOperator)
    console.log("Second Operator: " + secondOperator)
    console.log("Solution: " + solution)
    console.log("Where to store String: " + whereToStoreString)
}


function clearScreen(){
    screen.innerText = "";
    screenOutput = "";
    firstNumber = "";
    secondNumber = "";
    firstOperator = "";
    secondOperator = "";
    solution = "";
    whereToStoreString = "FIRST_OPERATOR"
}
function compute(){

}