//setup
let humanScore = 0;
let computerScore = 0;

const ChoiceMap = {
    0 : "rock",
    1 : "paper",
    2 : "scissors"
}

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissBtn = document.querySelector("#scissors-btn");
const outcomeTxt = document.querySelector("#outcome-txt");
const yourScoreTxt = document.querySelector("#your-score");
const compScoreTxt = document.querySelector("#comp-score");
const playerDisplay = document.querySelector(".player-display");
const computerDisplay = document.querySelector(".computer-display");

//add event Listeners
rockBtn.addEventListener("click", () => playRound(0));
paperBtn.addEventListener("click", () => playRound(1));
scissBtn.addEventListener("click", () => playRound(2));


//main


//function declaration

function playRound(humanChoice)
{
    let computerChoice = getComputerChoice();
    updateImage(humanChoice, computerChoice);
    updateScore(humanChoice, computerChoice);
    checkEndgame();
}

function getComputerChoice()
{
    // pick a random number from 0, 1, 2
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum;
}


function updateImage(humanChoice, computerChoice)
{
    playerDisplay.childNodes[0].src = `images/${ChoiceMap[humanChoice]}.svg`;
    computerDisplay.childNodes[0].src = `images/${ChoiceMap[computerChoice]}.svg`;
}
//update Score according to Outcome
function updateScore(humanChoice, computerChoice)
{
    // humanChoice - computerChoice =
    // 0 toh draw
    // 1 ya -2 toh win
    // 2 ya -1 toh lose
    switch(humanChoice - computerChoice)
    {
        case 0:
            break;

        case 1:
        case -2:
            humanScore++;
            break;
        
        case 2:
        case -1:
            computerScore++;
            break;
    }
    
    updateScoreText();
}

function updateScoreText()
{
    yourScoreTxt.textContent = humanScore;
    compScoreTxt.textContent = computerScore;
}

function checkEndgame()
{
    if (humanScore == 5)
    {
        outcomeTxt.textContent = "You Win";
    }
    else if (computerScore == 5)
    {
        outcomeTxt.textContent = "You lose";
    }
}






