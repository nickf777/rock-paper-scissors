
//Next: Enhance the Functionality with Logs that detail both your choice and the computer's choice.
//Score variables set globally
let userScore = 0;
let computerScore= 0;
let numberOfTies = 0;

//Generating the computers choice

const computerPlay = () => {
    let computerNum = Math.floor(Math.random() * 3);
    if (computerNum === 0) {
        return "rock";
    } else if (computerNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

//Assigning buttons to possible player choices

let rock = document.getElementsByClassName("rock")[0];
let paper = document.getElementsByClassName("paper")[0];
let scissors = document.getElementsByClassName("scissors")[0];

//Generating the result and updating the score

let score = document.getElementById("score")
score.innerText = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`

const playRound = (playerSelection, computerSelection) => {
    let playerSelectionCase = playerSelection.toLowerCase();
    if (playerSelectionCase === "rock" && computerSelection === "paper") {
        computerScore++;
        score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
        return "Paper beats rock! You lose!";
    } else if (playerSelectionCase === "rock" && computerSelection === "scissors") {
        userScore++;
        score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
        return "Rock beats scissors! You win!";
    } else if (playerSelectionCase === "paper" && computerSelection === "scissors") {
        computerScore++;
        score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
        return "Scissors beats paper! You lose!";
        
    } else if (playerSelectionCase === "paper" && computerSelection === "rock") {
        userScore++;
        score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
        return "Paper beats rock! You win!";
        
    } else if (playerSelectionCase === "scissors" && computerSelection === "rock") {
        computerScore++;
        score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
        return "Rock beats scissors! You lose!";
        
    } else if (playerSelectionCase === "scissors" && computerSelection === "paper") {
        userScore++;
        score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
        return "Scissors beats paper! You win!";
        
    } else {
        numberOfTies++;
        score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
        return "It's a tie! Please play again!";
  }
};


//Playing a single round, printing player choice, computer choice, and result to the results div. Restarts the game after 5 points.

let results = document.getElementById("results")

rock.addEventListener("click", function() {
        let playerSelection = "rock";
        let computerSelection = computerPlay();
        results.innerHTML = `You chose ${playerSelection}. The computer chose ${computerSelection}. ${(playRound(playerSelection,computerSelection))}`
        
        if (userScore === 5) {
            alert("You got five points. You're the winner!");
            userScore = 0;
            computerScore = 0;
            numberOfTies = 0;
            score.innerHTML = score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
            
        } else if (computerScore === 5) {
            alert("The computer beat you to five points. You're the loser!")
            userScore = 0;
            computerScore = 0;
            numberOfTies = 0;
            score.innerHTML = score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`

        }
});

paper.addEventListener("click", function() {
        let playerSelection = "paper";
        let computerSelection = computerPlay();
        results.innerHTML = `You chose ${playerSelection}. The computer chose ${computerSelection}. ${(playRound(playerSelection,computerSelection))}`
        
        if (userScore === 5) {
            alert("You got five points. You're the winner!");
            userScore = 0;
            computerScore = 0;
            numberOfTies = 0;
            score.innerHTML = score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
            
        } else if (computerScore === 5) {
            alert("The computer beat you to five points. You're the loser!")
            userScore = 0;
            computerScore = 0;
            numberOfTies = 0;
            score.innerHTML = score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
            
        }
});

scissors.addEventListener("click", function() {
        let playerSelection = "scissors";
        let computerSelection = computerPlay();
        results.innerHTML = `You chose ${playerSelection}. The computer chose ${computerSelection}. ${(playRound(playerSelection,computerSelection))}`
        
        if (userScore === 5) {
            alert("You got five points. You're the winner!");
            userScore = 0;
            computerScore = 0;
            numberOfTies = 0;
            score.innerHTML = score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
            
        } else if (computerScore === 5) {
            alert("The computer beat you to five points. You're the loser!")
            userScore = 0;
            computerScore = 0;
            numberOfTies = 0;
            score.innerHTML = score.innerHTML = `Your points: ${userScore}. Computer points: ${computerScore}. Number of tie games: ${numberOfTies}.`
            
        }
    });








