const DEFAULTSCREENCONTENT = "";
let screenOutput = DEFAULTSCREENCONTENT;


const screen = document.querySelector('.screen');

screen.innerText = screenOutput;
const buttons = document.querySelectorAll('button');

console.log(buttons)


//creates event listener for each button
for (let i = 0; i <= buttons.length - 1; i++){
    buttons[i].addEventListener('click', testfunc);
}

let firstNum = "";
let secondNum = "";
let operator = "";
let operatorHasBeenPressed = false;
function testfunc(){
    console.log(this.innerText)
    if (this.className === 'buttonNumber'){
        //appends numbers to what is already on the screen
        screenOutput = screenOutput + this.innerText;
        if (operatorHasBeenPressed === false){
            firstNum = firstNum + this.innerText;
        } else {
            secondNum = secondNum + this.innerText;
        }
        console.log("first Num:" +firstNum);
        console.log("second Num:" +secondNum);

    } else if(this.className === 'buttonClear'){
        //clears the screen
        screenOutput = "";
        //resets firstNum to blank
        firstNum = ""
    } else if(this.className === 'buttonEquals'){
        if (operator === "+"){
            screenOutput = addNums(firstNum, secondNum);
        } else if (operator === "-"){
            screenOutput = subtractNums(firstNum, secondNum);
        } else if (operator === "x"){
            screenOutput = multiplyNums(firstNum, secondNum);
        } else if (operator === "/"){
            screenOutput = divideNums(firstNum, secondNum);
        }
        
    } else if(this.className === 'buttonOperator'){
        operatorHasBeenPressed = true;

        // assigns operator variable based on operator button that was pushed
        operator = this.innerText;
        // appends operator to screen output
        screenOutput = screenOutput + this.innerText;
        console.log("screen output: " + screenOutput)
        console.log("firstNum: " + firstNum)
        console.log("operator: " + operator)
    }
    screen.innerText = screenOutput;
}

function computeContent(){
    let computedContent = parseInt(screenOutput);
    return(computedContent);
}

console.log("2"+"2")

function addNums(x,y){
    let solution = parseInt(x) + parseInt(y);
    return(solution);
}
function subtractNums(x,y){
    let solution = parseInt(x) - parseInt(y);
    return(solution);
}
function multiplyNums(x,y){
    let solution = parseInt(x) * parseInt(y);
    return(solution);
}
function divideNums(x,y){
    let solution = parseInt(x) / parseInt(y);
    return(solution);
}