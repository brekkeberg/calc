let screenOutput = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let solution = "";
let operatorHasBeenPressed = false;
let consoleOutputOn = true;
let allConsoleOutput = {};

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
    if (operatorHasBeenPressed === false){
        firstNumber += this.innerText;
    } else {
        secondNumber += this.innerText;
    }
    adjustFontSize.call();
    displayStatus();
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
    screenOutput += operator;
    screen.innerText = screenOutput;
    adjustFontSize.call();
    displayStatus();
}

function clearScreen(){
    screenOutput = "";
    screen.innerText = screenOutput;
    firstNumber = "";
    secondNumber = "";
    operator = "";
    operatorHasBeenPressed = false;
    displayStatus();
}

function compute(){
    if (operator === "+"){
        solution = add(firstNumber, secondNumber);
    } else if (operator === "-"){
        solution = subtract(firstNumber, secondNumber);
    } else if (operator === "×"){
        solution = multiply(firstNumber, secondNumber);
    } else if (operator === "÷"){
        solution = divide(firstNumber, secondNumber);
    }
    screenOutput = solution;
    screen.innerText = solution;
    firstNumber = solution;
    secondNumber = "";
    operator = "";
    operatorHasBeenPressed = false;
    adjustFontSize.call();
    displayStatus();
}


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
    if (screenOutput.length >=12){
        screen.style.cssText = "font-size: 65px"
    } else if (screenOutput.length >=11){
        screen.style.cssText = "font-size: 75px;"
    } else if (screenOutput.length >=10){
        screen.style.cssText = "font-size: 85px;"
    } else if (screenOutput.length >=9){
        screen.style.cssText = "font-size: 95px;"
    } else if (screenOutput.length >=8){
        screen.style.cssText = "font-size: 105px;"
    } else if (screenOutput.length >=7) {
        screen.style.cssText = "font-size: 120px;"
    } else {
        screen.style.cssText = "font-size: 130px;"
    }
}

function backspace(){
    screenOutput = screenOutput.toString();
    screenOutput = screenOutput.slice(0,-1);
    screen.innerText = screenOutput;
    if (secondNumber !== ""){
        console.log("CHECK")
        console.log(typeof(secondNumber))
        secondNumber = secondNumber.slice(0, -1);
    } else if (operator !== ""){
        operator = operator.slice(0, -1);
        operatorHasBeenPressed = false;
    } else if (firstNumber !== ""){
        firstNumber = firstNumber.slice(0,-1);
    }
    displayStatus();
}

function displayStatus(){
    if (consoleOutputOn === true){
        allConsoleOutput = {
            "Screen Output": [screenOutput, typeof(screenOutput)],
            "First #": [firstNumber, typeof(firstNumber)],
            "Second #": [secondNumber, typeof(secondNumber)],
            "Operator": [operator, typeof(operator)],
            "Has Operator been entered": [operatorHasBeenPressed, typeof(operatorHasBeenPressed)],
        };
        console.table(allConsoleOutput)
    }
}