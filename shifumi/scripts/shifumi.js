function MyChoiceIs(userChoice) {
    // Stop spinning animation
    document.querySelector(".computer-choice").className = "computer-choice stop-spinning";

    // Array of possible choices
    const choices = ["rock", "paper", "scissors", "spock", "lizard"];

    // Randomly select computer's choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display the computer's choice
    document.querySelector(".computer-choice ." + computerChoice).style.display = "block";

    // Define outcomes based on user's choice
    const outcomes = {
        "rock": ["scissors", "lizard"],
        "paper": ["rock", "spock"],
        "scissors": ["paper", "lizard"],
        "spock": ["rock", "scissors"],
        "lizard": ["paper", "spock"]
    };

    // Compare user's choice with computer's choice and display result
    if (userChoice === computerChoice) {
        document.querySelector('.result').innerText = 'Egalité ! 🥸';
    } else if (outcomes[userChoice].includes(computerChoice)) {
        document.querySelector('.result').innerText = '🎉 Tu as gagné !! Bravo 🎉';
    } else {
        document.querySelector('.result').innerText = 'Perdu !🥲';
    }

    // Reload the page after 3 seconds
    setTimeout(function (){
        window.location.reload();
    }, 3000);
}
