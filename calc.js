const DEFAULTSCREENCONTENT = "";

let currentScreenContent = DEFAULTSCREENCONTENT;


const screen = document.querySelector('.screen');

screen.innerText = currentScreenContent;
const buttons = document.querySelectorAll('button');

console.log(buttons)


//creates event listener for each button
for (let i = 0; i <= buttons.length - 1; i++){
    buttons[i].addEventListener('click', testfunc);
}


function testfunc(){
    console.log(this.innerText)
    if (this.className === 'inputButton'){
        currentScreenContent = currentScreenContent + this.innerText;
    } else if(this.className === 'clearButton'){
        currentScreenContent = ""
    }
    screen.innerText = currentScreenContent;
}