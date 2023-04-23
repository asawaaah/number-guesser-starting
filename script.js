let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// return random interger between 0 and 9 

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// compare answer between human and comoputer gues VS the target number

const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess < 0 || humanGuess > 9){
        window.alert('Pick a 0 or 9');
        }
    if (Math.abs(target - humanGuess) <= Math.abs(target - computerGuess)) {
        return true;
    } else {
        return false;
    }
};


// calculate and score after each round

const updateScore = winner => {
if (winner === "human") {
humanScore++;
} else if (winner === "computer") {
    computerScore++;
}
};

const advanceRound = () => {
    currentRoundNumber++;
}

// absolute disntace

const getAbsoluteDistance = (n1, n2) => {
    humanDistance = Math.abs(target - humanGuess);
    computerDistance = Math.abs(target - computerGuess);
};

