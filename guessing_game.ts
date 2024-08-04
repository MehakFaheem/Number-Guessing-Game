import inquirer from "inquirer"
//1)computer will generate a random number
//2) user input for guessing number
//3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

const answers = await inquirer.prompt(
    {
        name : "userguessednumber",
        type : "number",
        message : "Please guess a number between 1-10: ",
    },);
if(answers.userguessednumber === randomNumber)
    {
        console.log("Congragulations! you guessed the right number.");
    }
    else 
    {
        console.log("You guessed the wrong number");     
    }