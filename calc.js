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
const buttonOne = document.querySelector('#buttonOne')

//creates click event listener for all buttons
for (let i = 0; i <= buttonNumber.length - 1; i++){
    buttonNumber[i].addEventListener('click', storeNumber);
}
for (let i = 0; i <= buttonOperator.length - 1; i++){
    buttonOperator[i].addEventListener('click', storeOperator);
}
buttonClear.addEventListener('click', clearScreen);
buttonEquals.addEventListener('click', compute);
buttonBackspace.addEventListener('click', backspace);

//creates event listener for key entry
document.addEventListener('keydown', captureKey);

function captureKey(e){
    switch (e.key) {
        case "1":
            simulateClick(document.querySelector('#buttonOne'));
            break;
        case "2":
            simulateClick(document.querySelector('#buttonTwo'));
            break;
        case "3":
            simulateClick(document.querySelector('#buttonThree'));
            break;
        case "4":
            simulateClick(document.querySelector('#buttonFour'));
            break;
        case "5":
            simulateClick(document.querySelector('#buttonFive'));
            break;
        case "6":
            simulateClick(document.querySelector('#buttonSix'));
            break;
        case "7":
            simulateClick(document.querySelector('#buttonSeven'));
            break;
        case "8":
            simulateClick(document.querySelector('#buttonEight'));
            break;
        case "9":
            simulateClick(document.querySelector('#buttonNine'));
            break;
        case "0":
            simulateClick(document.querySelector('#buttonZero'));
            break;
        case "+":
            simulateClick(document.querySelector('#buttonAdd'));
            break;
        case "-":
            simulateClick(document.querySelector('#buttonSubtract'));
            break;
        case "*":
            simulateClick(document.querySelector('#buttonMultiply'));
            break;
        case "/":
            simulateClick(document.querySelector('#buttonDivide'));
            break;
        case "Enter":
            simulateClick(document.querySelector('#buttonEquals'));
            break;
        case "Delete":
        case "Backspace":
            simulateClick(document.querySelector('#buttonBackspace'));
            break;
    }
}

function simulateClick(x){
    x.click();
    x.style.cssText = "background-color: rgba(120, 200, 230, 0.777);" +
                    "box-shadow: 0px 0px 5px inset rgba(0,0,0,0.33)";
    setTimeout(function(){
        x.style.cssText = "background-color: rgba(255, 255, 255, 0.15)";
    }, 100);

}

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
    } else {
        solution = firstNumber;
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
    if (screenOutput.length >=14){
        screen.style.cssText = "font-size: 55px"
    } else if (screenOutput.length >=13){
        screen.style.cssText = "font-size: 60px"
    } else if (screenOutput.length >=12){
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


