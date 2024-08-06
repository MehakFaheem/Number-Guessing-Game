#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//1)computer will generate a random number
//2) user input for guessing number
//3) compare user input with computer generated number and show result
var randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
var answers = await inquirer_1.default.prompt({
    name: "userguessednumber",
    type: "number",
    message: "Please guess a number between 1-10: ",
});
if (answers.userguessednumber === randomNumber) {
    console.log("Congragulations! you guessed the right number.");
}
else {
    console.log("You guessed the wrong number");
}
