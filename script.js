//rows of 5 buttons each
const buttonCodes = {
    //row 0
    0:[' ', 'blank'],
    1:[' ', 'blank'],
    2:[' ', 'blank'],
    3:['AC', 'AC', 'func'],
    4:['<-', '<-', 'func'],
    5:[9, '9'],
    6:[8, '8'],
    7:[7, '7'],
    8:[' ', 'blank'],
    9:['+','add', 'func'],
    10:[6, '6'],
    11:[5, '5'],
    12:[4, '4'],
    13:[' ', 'blank'],
    14:['-', 'subtract', 'func'],
    15:[3, '3'],
    16:[2, '2'],
    17:[1, '1'],
    18:[' ', 'blank'],
    19:['*', 'multiply', 'func'],
    20:['.', 'dot'],
    21:[0, '0'],
    22:['=', 'equals', 'func'],
    23:[' ', 'blank'],
    24:['/', 'divide', 'func'],
}

function makeGrid () {
    const calcWindow = document.querySelector("#calc-main");
    
    for (let i=0; i<5; i++) {
        
        const row = document.createElement('div');
        calcWindow.appendChild(row);
        row.classList.add('row');
        row.setAttribute('id', `row`);
        
        for (let j=0; j<5; j++) {
            const button = document.createElement('button');
            row.appendChild(button);

            
        } 
        const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
                let temp = buttonCodes[i];
                buttons[i].setAttribute('id', temp[1]);
                buttons[i].textContent = temp[0];
        }
    }
}

function clearCalc () {

    clearDisplay();

}

function clearDisplay () {

    calcDisplay.textContent = 0;
    
}

function printToDisplay (number) {

}

function readDisplay () {

}


function operate (operationType) {

}

function add() {

}

function subtract () {

}

function multiply () {

}

function divide () {

}

function equals () {

}

const functions = {
    AC: clearCalc,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide, 
    equals: equals,
}

makeGrid(); 

const calcDisplay = document.querySelector('#display');

clearCalc();



