const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        console.log(event.target.value);
    }); 
});

//
const calculatorScreen = document.querySelector('.calculator-screen')
const updeatScreen =(number) => {
    calculatorScreen.value = number;
}

const number = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updeatScreen(event.target.value);
    });
});

//
let prevNumber = '';
let calculatorOprator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

number.forEach((number) => {
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updeatScreen(currentNumber);
    });
});

//
const oprators = document.querySelectorAll(".oprator");
oprators.forEach((oprator) => {
    oprator.addEventListener('click', (event) =>{
        inputOprator(event.target.value);
    });
});

//
const inputOprator = (oprator) => {
    if (calculatorOprator === ''){
        prevNumber = currentNumber;
    }
    calculatorOprator = oprator;
    currentNumber = '0';
}


//
const calculet = () => {
    let result = '';
    
    switch(calculatorOprator){
        case '+' :
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-' :
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*' :
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
            case '/' : 
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            case '%' :
            result = parseFloat(prevNumber) % parseFloat(currentNumber);
            break;
        default :
        break;
    }
    
    currentNumber = result;
    calculatorOprator = '';
}

//
const modulus = document.querySelector('.perecentage');
modulus.addEventListener("click", (event) => {
    inputOprator(event.target.value)
});

//
const allClear = document.querySelector('.all-clear');
allClear.addEventListener("click", () => {
    clearAll()
    updeatScreen(currentNumber);
});

//
const clearAll = () => {
    prevNumber = '';
    calculatorOprator = '';
    currentNumber = '0';
}

//
const  decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updeatScreen(calculatorOprator);
});

//
const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
    calculet();
    updeatScreen(currentNumber);
});

//
const inputDecimal = (dot) => {
   if (currentNumber.includes ('.')){
       return
   }
   currentNumber += dot;
}
