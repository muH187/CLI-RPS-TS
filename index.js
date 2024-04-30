#! /usr/bin/env node
import inquirer from "inquirer";
let getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};
const compChoice = getComputerChoice();
let askUser = await inquirer.prompt([
    {
        name: "userChoice",
        message: "Choose any one of them:",
        type: "list",
        choices: ["rock", "paper", "scissors"]
    }
]);
console.log(`Computer chose: ${compChoice}`);
console.log(`You chose: ${askUser.userChoice}`);
if (compChoice == "rock" && askUser.userChoice == "paper") {
    console.log("You Won");
}
else if (compChoice == "paper" && askUser.userChoice == "scissors") {
    console.log("You Won");
}
else if (compChoice == "scissors" && askUser.userChoice == "rock") {
    console.log("You Won");
}
else if (compChoice == askUser.userChoice) {
    console.log("It's tie");
}
else {
    console.log("Computer Win! You lose...");
}
