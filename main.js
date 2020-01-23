let playerSelection;
let message;
let choice;
const rockBtn=document.getElementById('rockBtn');
const paperBtn=document.getElementById('paperBtn');
const scisBtn=document.querySelector('#scissorsBtn');
const msgField=document.querySelector('#res');
const lNumber=document.getElementById('lNumber');
const rNumber=document.getElementById('rNumber');
function changeText(message){
    msgField.textContent=message;
    lNumber.textContent=playerScore;
    rNumber.textContent=computerScore;
}
rockBtn.addEventListener("click",function(){
    playerSelection="ROCK";
    playComputer();
    playRound(playerSelection,choice);
    changeText(message);
})
paperBtn.addEventListener('click',function(){
    playerSelection="PAPER";
    playComputer();
    playRound(playerSelection,choice);
    changeText(message);
})
scisBtn.addEventListener('click',function(){
    playerSelection="SCISSORS";
    playComputer();
    playRound(playerSelection,choice);
    changeText(message);
})
let playerScore=0;
let computerScore=0;
function playComputer(){
            let variants=["ROCK","PAPER","SCISSORS"];
            rand=Math.random();
            rand*=variants.length;
            rand=Math.floor(rand);
            choice=variants[rand];
        }
function playRound(playerSelection,choice){
            
           if(playerSelection==choice){
               message="It's a tie!";
                }
           else if(playerSelection=="ROCK" && choice=="SCISSORS"){
                     message="You Win! Computer chose Scissors";
                    playerScore++;
                    return message; }
           else if(playerSelection=="ROCK" && choice=="PAPER"){
                    message="You Lose! Computer chose Paper";
                    computerScore++;
                    return message;}
            else if(playerSelection=="PAPER" && choice=="SCISSORS"){
                message="You Lose! Computer chose Scissors";
                    computerScore++;
                    return message;}
                else if(playerSelection=="PAPER" && choice=="ROCK"){
                    message="You Win!Computer chose Rock";
                    playerScore++;
                    return message;}
            else if(playerSelection=="SCISSORS" && choice=="ROCK"){
                message="You Lose! Computer chose Rock";
                       computerScore++;}
                else{  message="You Win! Computer chose Paper";
                playerScore++;
                return message;}
        }
          

