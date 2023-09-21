function testfunc(){
    if (this.className === 'buttonNumber'){
        //appends numbers to what is already on the screen
        screenOutput = screenOutput + this.innerText;
        if (operatorHasBeenPressed === false){
            firstNum = firstNum + this.innerText;
        } else {
            secondNum = secondNum + this.innerText;
        }
    } else if(this.className === 'buttonClear'){
        //clears the screen
        screenOutput = "";
        //resets firstNum to blank
        firstNum = ""
    } else if(this.className === 'buttonEquals'){
        let solution = compute(x,y)
        screenOutput = solution;
        firstNum = solution;
        secondNum = "";
        operatorHasBeenPressed = false;
    } else if(this.className === 'buttonOperator'){
        operatorHasBeenPressed = true;
        // assigns operator variable based on operator button that was pushed
        operator = this.innerText;
        // appends operator to screen output
        screenOutput = screenOutput + this.innerText;
    }
    screen.innerText = screenOutput;
}

function computeContent(){
    let computedContent = parseInt(screenOutput);
    return(computedContent);
}


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

function compute(x,y){
    if (operator === "+"){
        return(addNums(x, y));
    } else if (operator === "-"){
        return(subtractNums(x, y));
    } else if (operator === "x"){
        return(multiplyNums(x, y));
    } else if (operator === "/"){
        return(divideNums(x, y));
    }
}