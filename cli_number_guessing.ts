import inquirer from "inquirer";
// 1) Machine will generate a random number between 1 and 100
// 2) User will guess the number
// 3) User will be told if they are too high or too low

const answers = await inquirer. prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess the number",
    },
])
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations!You guessed the number right!");
}else {
    console.log("Sorry!You guessed the number wrong!");
    
}