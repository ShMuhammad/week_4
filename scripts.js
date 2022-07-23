let displayTxtField = document.getElementById("resultDisplay");
let fPointBtn = document.getElementById("fPoint");
const buttonsList = document.querySelectorAll("input[type=button]");
let displayValue = '';
let firstValue = 0;
let operator = '';



for(button of buttonsList){
    button.addEventListener('click', (e) => {
        let buttonText = e.target.value;

        if(buttonText >= 0 || buttonText <= 9 || buttonText == '.'){
            if (buttonText == '.' ) { 
                fPointBtn.disabled = true; 
            }
            displayValue += buttonText;        
            displayTxtField.value = displayValue;         
        }else{
            if(buttonText === '+') {
                operator = '+';
                firstValue = displayValue;
                displayValue = '';
                fPointBtn.disabled = false;

            }else if(buttonText === '-') {
                operator = '-';
                firstValue = displayValue;
                displayValue = '';
                fPointBtn.disabled = false;
            }else if(buttonText === 'x') {
                operator = 'x';
                firstValue = displayValue;
                displayValue = '';
                fPointBtn.disabled = false;
            }else if(buttonText === '/') {
                operator = '/';
                firstValue = displayValue;
                displayValue = '';
                fPointBtn.disabled = false;
                console.log("firstValue: " + firstValue);
                console.log("displayValue: " + displayValue);
            }else if(buttonText === '=') {
                if (firstValue === '' || displayValue === '') {
                    displayTxtField.value = 0;
                }else{
                    if(operator == '/' && displayValue == 0){
                        displayTxtField.value = "Cannot divide by 0";
                    }else{
                        displayValue  =  operate(operator, parseFloat(firstValue), parseFloat(displayValue));
                        displayTxtField.value = displayValue ;
                        console.log("Total: " + displayValue);
                    }  
                }  
            }else if(buttonText === 'C') {
                clearDisplay();
            }
        }
    })    
}

function backSpace(){
    displayValue = displayValue.substring(0, displayValue.length-1)
    displayTxtField.value =  displayTxtField.value.substring(0,  displayTxtField.value.length-1)
}

function clearDisplay(){
    displayValue = '';
    firstValue = 0;
    operator = '';
    displayTxtField.value = displayValue;
    fPointBtn.disabled = false; 
}


function operate(operator, num1, num2){
    let divideOpe = 0;
    if (operator === '+'){
        return num1 + num2;
    }else if (operator === '-'){
        return num1 - num2;
    }else if (operator === 'x'){
        return num1 * num2;
    }else{
        divideOpe = num1 / num2
        return divideOpe.toFixed(6);
    }
}

window.onload = clearDisplay();