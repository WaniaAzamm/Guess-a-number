import inquirer from "inquirer";
let winningNumber :number =12;
let userGuess = await inquirer.prompt(
{
   name:"userguess",
   type:"number",
   message:"Guess a Number!"
})
if(userGuess.userguess == winningNumber){
    console.log("Wow, your guess is Correct!")
}else if(userGuess.userguess > winningNumber){
    console.log("Too High..!")
}else{
    console.log("Too Low..!")
};
