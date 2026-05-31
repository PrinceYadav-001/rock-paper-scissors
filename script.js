let humanScore = 0;
let computerScore = 0;

console.log("File Loaded!");

function getComputerChoice()
{
    // pick a random number from 0, 1, 2
    //   i.e. floor(random * 3)
    let randomNum = Math.floor(Math.random() * 3);

    //  if num = 0 toh "rock" ,
    //  if num = 1 toh "paper",
    //  if num = 2 toh "scissors"
    switch(randomNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

}

function getHumanChoice()
{
    return prompt("Enter Choice: ").toLowerCase();
}



function playRound(humanChoice, computerChoice)
{
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
    // -2 toh win

    switch(humanChoice - computerChoice)
    {
        case 0:
            return "draw";
            
        case -1:
        case 2:
            return "lose";

        case -2:
        case 1:
            return "win";
    }
}

