
<script>
let output;
let a=0;
let b=0; 
function computerPlay() // to pick randomly from Rock, Paper , Scissors
{
    let arr = ["Rock","Paper","Scissors"];
    output = arr[Math.floor(Math.random() * arr.length)];
    return output;
}
let computerSelection = computerPlay(); 
let playerSelection;

function round(playerSelection,computerSelection)  // function which plays the game 
{
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
    return "Same weapon, Try again";

    else if ((( playerSelection.toLowerCase() == "rock")&&(computerSelection.toLowerCase() =="paper")) || ((playerSelection.toLowerCase() == "scissors")&&(computerSelection.toLowerCase() == "rock")) || ((playerSelection.toLowerCase() == "paper")&&(computerSelection.toLowerCase() == "scissors")))
   {
    a++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;  
   }

    else if ((( playerSelection.toLowerCase() == "paper")&&(computerSelection.toLowerCase() == "rock")) || ((playerSelection.toLowerCase() == "scissors")&&(computerSelection.toLowerCase() == "paper")) || ((playerSelection.toLowerCase() == "rock")&&(computerSelection.toLowerCase() == "scissors")))
    {
        b++;
        return ` You win, ${playerSelection} beats ${computerSelection} `;
    }
}
function games()
{
    playerSelection =  prompt("Enter your selection "," ");
    computerSelection = computerPlay();
    console.log(round(playerSelection,computerSelection));
}

/*for (let i=0;i<5;i++) // loop to run the program 5 times 
{
 games();
}*/
if(a>b)
{
    console.log( "Defeat : Computer defats Human")
}
else if( b>a)
{
    console.log( " victory : Human defeats Comp")
}
</script>