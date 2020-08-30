// Player Selection
var playerSelection = Cookies.get("pokemon");
var playerPokemon = document.getElementById("player-selection");
playerPokemon.innerHTML = playerSelection;
var battleWinner = document.getElementById("battle-winner");



// Variables
var gengarHealth = Cookies.get("computer_health");
var userHealth = Cookies.get("user_health");
var attackOneDamage;
var attackTwoDamage;
var attackThreeDamage;
var attackFourDamage;
var winner;



// Health Stats
var computerHealth = document.getElementById("computer-health");
computerHealth.innerHTML = gengarHealth + "/220";
var playerHealth = document.getElementById("player-health");
playerHealth.innerHTML = userHealth + "/250";




// If Pikachu chosen
if(playerSelection === "Pikachu") {
    playerPokemon.innerHTML = "<img src='https://26.media.tumblr.com/tumblr_m3245olhHC1rrfi85o1_500.gif' alt='Pikachu with Lightening'>";
    attackOneDamage = 65;
    attackTwoDamage = 40; 
    attackThreeDamage = 80;
    attackFourDamage = 15;
}


// If Jigglypuff chosen
if(playerSelection === "Jigglypuff") {
    playerPokemon.innerHTML = "<img src='https://thumbs.gfycat.com/ClearGranularDuckling-small.gif' alt='Jigglypuff Jumping'>";
    attackOneDamage = 75;
    attackTwoDamage = 65; 
    attackThreeDamage = 50;
    attackFourDamage = 10;
}


// If Charmander chosen
if(playerSelection === "Charmander") {
    playerPokemon.innerHTML = "<img src='https://thumbs.gfycat.com/EcstaticGloomyCavy-small.gif' alt='Charmander Bouncing'>";
    attackOneDamage = 70;
    attackTwoDamage = 55; 
    attackThreeDamage = 80;
    attackFourDamage = 35;
}



// Player Attacks
function AttackOne() {
    gengarHealth = gengarHealth - attackOneDamage;
    computerHealth.innerHTML = gengarHealth + "/220";
    userHealth = userHealth - attackFourDamage;
    playerHealth.innerHTML = userHealth + "/250";

    if(gengarHealth <= 0) {
        battleWinner.innerHTML = "<h3>You Win!</h3>";
    } else if(userHealth <= 0){
        battleWinner.innerHTML = "<h3>You Lose!</h3>";
    } else {
        battleWinner.innerHTML = "<h3>Attack!</h3>";
    }
    Cookies.set("user_health", userHealth);
    Cookies.set("computer_health", gengarHealth);
}


function AttackTwo() {
    gengarHealth = gengarHealth - attackTwoDamage;
    computerHealth.innerHTML = gengarHealth + "/220";
    userHealth = userHealth - attackThreeDamage;
    playerHealth.innerHTML = userHealth + "/250";

    if(gengarHealth <= 0) {
        battleWinner.innerHTML = "<h3>You Win!</h3>";
    } else if(userHealth <= 0){
        battleWinner.innerHTML = "<h3>You Lose!</h3>";
    } else {
        battleWinner.innerHTML = "<h3>Whoosh!</h3>";
    }

    Cookies.set("user_health", userHealth);
    Cookies.set("computer_health", gengarHealth);
}


function AttackThree() {
    gengarHealth = gengarHealth - attackThreeDamage;
    computerHealth.innerHTML = gengarHealth + "/220";
    userHealth = userHealth - attackOneDamage;
    playerHealth.innerHTML = userHealth + "/250";

    if(gengarHealth <= 0) {
        battleWinner.innerHTML = "<h3>You Win!</h3>";
    } else if(userHealth <= 0){
        battleWinner.innerHTML = "<h3>You Lose!</h3>";
    } else {
        battleWinner.innerHTML = "<h3>AAGGHH.</h3>";
    }

    Cookies.set("user_health", userHealth);
    Cookies.set("computer_health", gengarHealth);
}


function AttackFour() {
    gengarHealth = gengarHealth - attackFourDamage;
    computerHealth.innerHTML = gengarHealth + "/220";
    userHealth = userHealth - attackTwoDamage;
    playerHealth.innerHTML = userHealth + "/250";

    if(gengarHealth <= 0) {
        battleWinner.innerHTML = "<h3>You Win!</h3>";
    } else if(userHealth <= 0){
        battleWinner.innerHTML = "<h3>You Lose!</h3>";
    } else {
        battleWinner.innerHTML = "<h3>Let's Do This!</h3>";
    }

    Cookies.set("user_health", userHealth);
    Cookies.set("computer_health", gengarHealth);
}



// Audio
var audioBattle = document.getElementById("battle-music")
audioBattle.volume = 0.3;
audioBattle.loop = true;



// Play Again
function playAgain(){
    document.getElementById("play-again");
    Cookies.remove("pokemon");
    Cookies.remove("user_health");
    Cookies.remove("computer_health");
    var windowHome = window.open("index.html", "_self");
}

