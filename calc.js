let screenOutput = "";
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let solution = "";
let screenOutputString ="";
let operatorHasBeenPressed = false;

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
    secondNumber = 0;
    operator = "";
    operatorHasBeenPressed = false;
    adjustFontSize.call();
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
    if (screenOutputString.length >=12){
        screen.style.cssText = "font-size: 65px"
    } else if (screenOutputString.length >=11){
        screen.style.cssText = "font-size: 75px;"
    } else if (screenOutputString.length >=10){
        screen.style.cssText = "font-size: 85px;"
    } else if (screenOutputString.length >=9){
        screen.style.cssText = "font-size: 95px;"
    } else if (screenOutputString.length >=8){
        screen.style.cssText = "font-size: 105px;"
    } else if (screenOutputString.length >=7) {
        screen.style.cssText = "font-size: 120px;"
    } else {
        screen.style.cssText = "font-size: 130px;"
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

function backspace(){
    screenOutput = screenOutput.slice(0,-1);
    screen.innerText = screenOutput;
}