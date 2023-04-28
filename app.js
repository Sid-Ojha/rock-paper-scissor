let userScore=0;
let computerScore=0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=(Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function converttoWord(letter){
    if(letter=== "r")return "Rock";
    if(letter=== "p")return "Paper";
    return "Scissor";

}



function win(userChoice,computerChoice){
 userScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML= computerScore;
 result_p.innerHTML= converttoWord(userChoice)  +" beats "+converttoWord(computerChoice)+", you Win. ";
 document.getElementById(userChoice).classList.add('green_glow');
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML= converttoWord(userChoice)  +" loses to "+converttoWord(computerChoice)+", you Lost. ";
}
function draw(userChoice,computerChoice){
    result_p.innerHTML= converttoWord(userChoice)  +" equals to "+converttoWord(computerChoice)+", it's a Draw.";
}
function game(userChoice)
{
    const computerChoice= getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("user wins");
            win(userChoice,computerChoice);
            break;   
        case "rp":
        case "ps":
        case "sr":
            console.log("user looses");
            lose(userChoice,computerChoice);
            break;  
        case "rr":
        case "pp":
        case "ss":
            console.log("Draw");
            draw(userChoice,computerChoice );
            break;     
    }
}

function main(){
rock_div.addEventListener('click',  function()
{
    game("r");
    console.log("you clicked on Rock");
    
})
paper_div.addEventListener('click',function()
{
    game("p");
    console.log("you clicked on Paper");
    
})
scissor_div.addEventListener('click',function()
{
    game("s");
    console.log("you clicked on scissor");
    
})
}

main();
