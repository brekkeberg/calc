const screen = document.querySelector('.screen');
const buttonNumber = document.querySelectorAll('.buttonNumber');
const buttonOperator = document.querySelectorAll('.buttonOperator');
const buttonClear = document.querySelector('.buttonClear');
const buttonEquals = document.querySelector('.buttonEquals');

//creates event listener for all buttons
for (let i = 0; i <= buttonNumber.length - 1; i++){
    buttonNumber[i].addEventListener('click', storeNumber);
}
for (let i = 0; i <= buttonOperator.length - 1; i++){
    buttonOperator[i].addEventListener('click', storeOperator);
}
buttonClear.addEventListener('click', clearScreen);
buttonEquals.addEventListener('click', compute);

let screenOutput = "";
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let solution = "";
let screenOutputString ="";
let operatorHasBeenPressed = false;

function storeNumber(){
    screenOutput = screenOutput + this.innerText;
    screen.innerText = screenOutput;
    if (operatorHasBeenPressed === false){
        firstNumber = firstNumber + this.innerText;
    } else {
        secondNumber = secondNumber + this.innerText;
    }

    adjustFontSize.call();
    displayStatus.call();
}

function storeOperator(){
    // if an operator has already been pressed, computes the function
    if (operatorHasBeenPressed === true){
        compute.call();
    } else {
        operatorHasBeenPressed = true;
    }
    // stores the operator that was just pressed
    operator = this.innerText;
    operatorHasBeenPressed = true;
    // apends operator that was pressed to screen
    screenOutput = screenOutput + operator;
    screen.innerText = screenOutput;

    adjustFontSize.call();
    displayStatus.call();
}

function clearScreen(){
    // clears screen
    screenOutput = "";
    screen.innerText = screenOutput;
    // resets all stored variables
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    operatorHasBeenPressed = false;
    displayStatus.call();
}

function compute(){
    if (operator === "+"){
        solution = add(firstNumber, secondNumber);
    } else if (operator === "-"){
        solution = subtract(firstNumber, secondNumber);
    } else if (operator === "x"){
        solution = multiply(firstNumber, secondNumber);
    } else if (operator === "/"){
        solution = divide(firstNumber, secondNumber);
    }
    screenOutput = solution;
    screen.innerText = solution;
    firstNumber = solution;
    secondNumber = 0;
    operator = "";
    operatorHasBeenPressed = false;

    adjustFontSize.call();
    displayStatus.call();
}

// math functions
function add(x,y){
    let solution = parseInt(x) + parseInt(y);
    return(solution);
}
function subtract(x,y){
    let solution = parseInt(x) - parseInt(y);
    return(solution);
}
function multiply(x,y){
    let solution = parseInt(x) * parseInt(y);
    return(solution);
}
function divide(x,y){
    let solution = parseInt(x) / parseInt(y);
    return(solution);
}

function adjustFontSize(){
    screenOutputString = screenOutput.toString();
    if (screenOutputString.length >=18){
        screen.style.cssText = "font-size: 4vmin;"
    } else if (screenOutputString.length >=16){
        screen.style.cssText = "font-size: 5vmin;"
    } else if (screenOutputString.length >=14){
        screen.style.cssText = "font-size: 6vmin;"
    } else if (screenOutputString.length >=12){
        screen.style.cssText = "font-size: 7vmin;"
    } else if (screenOutputString.length >=10){
        screen.style.cssText = "font-size: 8vmin;"
    } else if (screenOutputString.length >=8) {
        screen.style.cssText = "font-size: 10vmin;"
    } else {
        screen.style.cssText = "font-size: 12vmin;"
    }
}


function displayStatus(){
    console.log("Screen Output: " + screenOutput)
    console.log("Screen Output String: " + screenOutputString)
    console.log("First #: " + firstNumber)
    console.log("Second #: " + secondNumber)
    console.log("Operator: " + operator)
    console.log("Has Operator been pressed: " + operatorHasBeenPressed)
}
