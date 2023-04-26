let userScore=0;
let computerScore=0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computerScore");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.querySelector(".r");
const paper_div=document.querySelector(".p");
const scissor_div=document.querySelector(".s");

function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=(Math.floor(Math.random()*3));
    return choices[randomNumber]
}
game('r');
function win(user,computer){
 userScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML= computerScore;
 console.log("user");

}
function lose(){

}
function draw(){

}
function game(userChoice)
{
    const ComputerChoice= getComputerChoice();
    switch(userChoice + ComputerChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("user wins");
            win(userChoice,ComputerChoice);
            break;   
        case "rp":
        case "ps":
        case "sr":
            console.log("user looses");
            lose(userChoice,ComputerChoice);
            break;  
        case "rr":
        case "pp":
        case "ss":
            console.log("Draw");
            draw(userChoice,ComputerChoice );
            break;     
    }
}

function main(){
rock_div.addEventListener('click',function()
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