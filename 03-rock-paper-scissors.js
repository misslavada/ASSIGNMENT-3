//user's choice
let choice = prompt('Choose one: rock, paper, or scissors.');
//invalid choice by user
    if (! choice) {
        window.document.write('Please make a valid choice');
    } else {
        window.document.write('You picked ' + choice + '<br>');
    };
//computer's choice
var computer = Math.random();
    if (computer < 0.33) {
        computer = "rock";
    } else if(computer <= 0.66) {
        computer = "paper";
    } else {
        computer = "scissors";
    };
window.document.write("Computer has picked: " + computer + "<br>");

//user vs computer conditionals
var compareChoices = function(choice1,choice2) {
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "You lose! Try again.";
        } else {
            return "You win!";
        }
    } 
// if there's a tie    
    if (choice1 === choice2) {
        return "It's a tie!";
    }
};
//results and displaying 
var results = compareChoices(choice,computer);
window.document.write("<br>" + results);