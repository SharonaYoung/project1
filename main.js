// global variables to store results
let wins = 0;
let losses = 0;
let ties = 0;

// variable to store # of rounds
let round = prompt("Let's play rock, paper, scissors.\nHow many rounds you would like to play: ")
let rounds = parseInt(round);

const play = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let userChoice = prompt("Enter r, p, or s");

  if (computerChoice === 0){
    computerChoice = "r";
  } else if ( computerChoice === 1){
    computerChoice = "p";
  } else {
    computerChoice = "s";
  }

  if (userChoice === computerChoice){
    alert("it's a tie!")
    ties++;
  } else if(userChoice === "r" && computerChoice === "s"){
    alert(`You win!! ${userChoice} beats ${computerChoice}`)
    wins++;
  } else if(userChoice === "p" && computerChoice === "r"){
    alert(`You win!! ${userChoice} beats ${computerChoice}`)
    wins++;
  } else if(userChoice === "s" && computerChoice === "p"){
    alert(`You win!! ${userChoice} beats ${computerChoice}`)
    wins++;
  } else {alert(`You lose!! ${computerChoice} beats ${userChoice}`)
    losses++
  }
    console.log("comp chose " + computerChoice);
}


for (let i = 0; i < rounds; i++){
  play();
  
}
alert(`Game over\n${rounds} rounds: Wins-${wins} | Ties-${ties} | Losses-${losses}`);





// for (let i = 0; i < rounds; i++){
//   // prompt for user choice
//   let userChoice = prompt("Choose rock, paper, or scissors")
//   console.log(userChoice);

//   // generate random number for computer choice
//  let computerChoice = Math.floor(Math.random() * 3);
//  console.log(computerChoice);

//  if (computerChoice === 0){
//    computerChoice = "rock";
//  } else if (computerChoice === 1){
//    computerChoice = "paper";
//  } else {
//    computerChoice = "scissors";
//  }
//  console.log("computer played " + computerChoice);

 
//   // compare user choice to computer choice

//   // alert to display results 
//   alert("computer chose " + computerChoice);
// }  