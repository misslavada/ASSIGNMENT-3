//Ask for a variable
let num1 = prompt('Pick any number');
//second variable
let num2 = prompt('Pick another number');
//which operation
let operation = prompt('What type of operation would you like? (please enter "add", "subtract", "multiply", or "divide")');
//function with 3 parameters
let loop = true;
//use switch statement
function calculate(param1, param2, param3){
    while (loop) {
        num1;
        num2;
        operation;
    }
    switch(operation) {
        case 'add':
            let opResponse = Number(num1) + Number(num2);
            console.log(opResponse);
            break;
        case 'subtract':
            let opResponse = Number(num1) - Number(num2);
            console.log(opResponse);
            break;
        case 'multiply':
            let opResponse = Number(num1) * Number(num2);
            console.log(opResponse);
            break;
        case 'divide':
            let opResponse = Number(num1) / Number(num2);
            console.log(opResponse);
            break;
        case 'stop':
            loop = false;
            break;
        default:
            alert('Please enter a valid response');
    }
};
calculate(num1, num2, operation);
//alert if no operation picked
window.document.write('Your answer is ' + opResponse);
