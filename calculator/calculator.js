/**
 * This is a calculator program that performs basic 
 * addition, subtraction, multiplication and division.
 * It also has functions to clear screen and delete numbers.
 */


let num1 = 0, num2 = 0, operId, chr, str;

/**  
 * Update data on the calculator screen 
 */
function updateResult(output) {
    document.querySelector('.screen').innerText = output;
    //console.log('output ' + output + ', typeof ' + typeof(output) );
}

/** 
 * Clear all data from screen
 */
function clearScreen() {
    num1 = 0;
    operId = '';
    chr = '';
    str = '';
    num2 = 0;
    updateResult(0);
}

/**
 * Add new number on screen
 * num1 is written before operator is pressed
 * num2 is written after operator is pressed
 */
function writeResult() {
    if (operId === '') {
        num1 = parseInt(str);
        updateResult(num1);
    } else {
        num2 = parseInt(str);
        updateResult(num2);
    }
}

/**
 * Perform calculations
 * Write result into num1
 * Update calculator screen
 */
function calculate () {
    if (operId === '+') {
        num1 = num1 + num2;       
    } else if (operId === '-') {
        num1 = num1 - num2;
    } else if (operId === '×') {
        num1 = num1 * num2;
    } else if (operId === '÷') {
        num1 = num1 / num2;
    }
    updateResult(num1);
}

/**
 * Remove last digit
 * If no digits show zero
 * Write result on calculator screen
 */
function backspace () {
    str = document.querySelector('.screen').innerText;
    str = str.slice(0, -1);
    if (str.length < 1) {
        str = '0';
    }
    writeResult();     
    //console.log('str.slice ' + str );
}

/**
 * Initially clear all data from screen
 */
clearScreen();

/**
 * Listen for click event on the container element
 *      and get inner text from button
 * Check if button is not a number and perform 
 *      either clear screen or backspace operations
 *      otherwise calculate result 
 * If a number button is clicked then write that number on screen
 */
document.querySelector('.container').addEventListener('click', function(event){
    chr = `${event.target.innerText}`;
    if (isNaN(chr)) {
        str = '';
        if (chr === 'C') {
            clearScreen();
        } else if (chr === '←') {
            backspace();
        } else {
            calculate();
            operId = chr;
        }

    } else {
        str += chr;
        writeResult();     
    }
});
