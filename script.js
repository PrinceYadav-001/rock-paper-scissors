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

