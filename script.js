//setup
let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissBtn = document.querySelector("#scissors-btn");
const outcomeTxt = document.querySelector("#outcome-txt");
const yourScoreTxt = document.querySelector("#your-score");

//add event Listeners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissBtn.addEventListener("click", () => playRound("scissors"));


//main


//function declaration

function playRound(humanChoice)
{
    let computerChoice = "rock";

    // pick a random number from 0, 1, 2
    //   i.e. floor(random * 3)
    let randomNum = Math.floor(Math.random() * 3);

    //  if num = 0 toh "rock" ,
    //  if num = 1 toh "paper",
    //  if num = 2 toh "scissors" 
    switch(randomNum){
        case 0:
            computerChoice = "rock";
        case 1:
            computerChoice = "paper";
        case 2:
            computerChoice = "scissors";
    }
    

    let choiceMap = {
        "rock" : 0,
        "paper" : 1,
        "scissors" : 2,
    }

    humanChoice = choiceMap[humanChoice];
    computerChoice = choiceMap[computerChoice];

    // humanChoice - computerChoice =
    // 0 toh draw
    // 1 toh win
    // -1 toh lose
    // 2 toh lose
    // -2 toh wingetComputerChoice()

    switch(humanChoice - computerChoice)
    {
        case 0:
            break;

        case -1:
        case 2:
            computerScore++;
            break;

        case -2:
        case 1:
            humanScore++;
            break;
    }

    yourScoreTxt.textContent = humanScore;
    checkEndgame();
}


function checkEndgame()
{
    if (humanScore == 5)
    {
        outcomeTxt.textContent = "You Win";
    }
    else if (humanScore == 5)
    {
        outcomeTxt.textContent = "You lose";
    }
}






