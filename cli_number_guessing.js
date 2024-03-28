const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess the number",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations!You guessed the number right!");
}
else {
    console.log("Sorry!You guessed the number wrong!");
}
export {};
