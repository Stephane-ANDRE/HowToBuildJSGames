// Function to handle when Trumpy is found
function found(){
    // Calculate the time taken to find Trumpy
    const findTime = new Date().getTime() - window.startTime;
    const findSeconds = findTime / 1000;
     // Play the sound
     const winSound = document.getElementById("win");
     winSound.play();
    // Display a congratulatory message with the time taken
    alert("Super ! Tu as trouvé Trumpy en " + findSeconds + " secondes!");
   
    // Start a new game
    newGame();
}

// Function to start a new game
function newGame () {
    // Set start time for the game
    window.startTime = new Date().getTime();
    // Calculate maximum X and Y positions for Trumpy's image
    const maxX = document.body.clientWidth - 55;
    const maxY = document.body.clientHeight - 65;
    // Generate random X and Y positions for Trumpy's image
    const x = Math.round(Math.random() * maxX);
    const y = Math.round(Math.random() * maxY);
    // Set the position of Trumpy's image
    document.getElementById("trumpyFace").style.top = y + "px";
    document.getElementById("trumpyFace").style.left = x + "px";
}

// Start a new game when the page loads
newGame();
