//STEP 1
function halfNumber() {
    let num1 = 10;
    let divide = num1 / 2;
    window.document.write('Half of ' + num1 + ' is ' + divide +'<br>');
}
halfNumber();
//STEP 2
function squareNumber() {
    let num1 = 10;
    let square = num1**2;
    window.document.write('The square of ' + num1 + ' is ' + square + '<br>');
}
squareNumber();
//STEP 3
function percentOf() {
    let num1 = 10;
    let per = 10;
    let percent = (num1/100)*10;
    window.document.write(percent + ' is ' + per + '% of ' + num1 +'<br>');
}
percentOf();
// //STEP 4
function findModulus() {
    let num1 = 20;
    let num2 = 3;
    let modulus = num1 % num2;
    window.document.write(modulus + ' is the modulus of ' + num1 + ' and ' + num2 +  '<br>');
}
findModulus();
// //STEP 5function halfNumber() {
function threeNumbers() {
    let num1 = Number(prompt("Enter a number"));
    let num2 = Number(prompt("Enter a number"));
    let z = Number(prompt("Enter a number"));
    let three = (num1 + num2 + z);
    window.document.write('The sum of ' + num1 + ' and ' + num2 + ' and ' + z + ' is ' + three);
}
threeNumbers();