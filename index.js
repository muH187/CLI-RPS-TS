#! /usr/bin/env node
import inquirer from "inquirer";
let getComputerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};
const compChoice = getComputerChoice();
let userScore = 0;
let compScore = 0;
let tie = 0;
let coding = true;
while (coding) {
    let getComputerChoice = () => {
        const options = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        return options[randomIndex];
    };
    const compChoice = getComputerChoice();
    let askUser = await inquirer.prompt([
        {
            name: "userChoice",
            message: "Choose any one of them:",
            type: "list",
            choices: ["Rock", "Paper", "Scissors", "Exit"]
        }
    ]);
    console.log(`Computer chose: ${compChoice}`);
    console.log(`You chose: ${askUser.userChoice}`);
    if (compChoice == "Rock" && askUser.userChoice == "Paper") {
        console.log("You Won! Computer lose...");
        userScore++;
    }
    else if (compChoice == "Paper" && askUser.userChoice == "Scissors") {
        console.log("You Won! Computer lose...");
        userScore++;
    }
    else if (compChoice == "Scissors" && askUser.userChoice == "Rock") {
        console.log("You Won! Computer lose...");
        userScore++;
    }
    else if (compChoice == askUser.userChoice) {
        console.log("It's tie");
        tie++;
    }
    else if (askUser.userChoice == "Exit") {
        console.log(`Your Score: ${userScore} \nComputer Score: ${compScore} \nTie: ${tie}`);
        coding = false;
    }
    else {
        console.log("Computer Won! You lose...");
        compScore++;
    }
}
