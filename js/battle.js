// Player Selection
var playerSelection = Cookies.get("pokemon");
var playerPokemon = document.getElementById("player-selection");
playerPokemon.innerHTML = playerSelection;
var battleWinner = document.getElementById("battle-winner");



// Variables
var gengarHealth = Cookies.get("computer_health");
var userHealth = Cookies.get("user_health");
var attackOneDamage;
var attackMoveOne = document.getElementById("attack-one");
var attackTwoDamage;
var attackMoveTwo = document.getElementById("attack-two");
var attackThreeDamage;
var attackMoveThree = document.getElementById("attack-three");
var attackFourDamage;
var attackMoveFour = document.getElementById("attack-four");
var winner;



// Health Stats
var computerHealth = document.getElementById("computer-health");
computerHealth.innerHTML = gengarHealth + "/375";
var playerHealth = document.getElementById("player-health");
playerHealth.innerHTML = userHealth + "/350";




// If Pikachu chosen
if(playerSelection === "Pikachu") {
    playerPokemon.innerHTML = "<img src='https://26.media.tumblr.com/tumblr_m3245olhHC1rrfi85o1_500.gif' alt='Pikachu with Lightening'>";
    attackOneDamage = 65;
    attackMoveOne.innerHTML = "<p>Quick Attack: 65 HP</p>";
    attackTwoDamage = 40;
    attackMoveTwo.innerHTML = "<p>Tail Whip: 40 HP</p>";
    attackThreeDamage = 80;
    attackMoveThree.innerHTML = "<p>Thunder Shock: 80 HP</p>";
    attackFourDamage = 15;
    attackMoveFour.innerHTML = "<p>Growl: 15 HP</p>";
}


// If Jigglypuff chosen
if(playerSelection === "Jigglypuff") {
    playerPokemon.innerHTML = "<img src='https://thumbs.gfycat.com/ClearGranularDuckling-small.gif' alt='Jigglypuff Jumping'>";
    attackOneDamage = 75;
    attackMoveOne.innerHTML = "<p>Pound: 75 HP</p>";
    attackTwoDamage = 65;
    attackMoveTwo.innerHTML = "<p>Mega Punch: 65 HP</p>"; 
    attackThreeDamage = 50;
    attackMoveThree.innerHTML = "<p>Echoed Voice: 50 HP</p>";
    attackFourDamage = 10;
    attackMoveFour.innerHTML = "<p>Charm: 10 HP</p>";
}


// If Charmander chosen
if(playerSelection === "Charmander") {
    playerPokemon.innerHTML = "<img src='https://thumbs.gfycat.com/EcstaticGloomyCavy-small.gif' alt='Charmander Bouncing'>";
    attackOneDamage = 70;
    attackMoveOne.innerHTML = "<p>Fire Spin: 70 HP</p>";
    attackTwoDamage = 55;
    attackMoveTwo.innerHTML = "<p>Ember: 55 HP</p>";
    attackThreeDamage = 80;
    attackMoveThree.innerHTML = "<p>Flamethrower: 80 HP</p>";
    attackFourDamage = 35;
    attackMoveFour.innerHTML = "<p>Scratch: 35 HP</p>";
}



// Player Attacks
function AttackOne() {
    gengarHealth = gengarHealth - attackOneDamage;
    computerHealth.innerHTML = gengarHealth + "/375";
    userHealth = userHealth - attackFourDamage;
    playerHealth.innerHTML = userHealth + "/350";

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
    computerHealth.innerHTML = gengarHealth + "/375";
    userHealth = userHealth - attackThreeDamage;
    playerHealth.innerHTML = userHealth + "/350";

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
    computerHealth.innerHTML = gengarHealth + "/375";
    userHealth = userHealth - attackOneDamage;
    playerHealth.innerHTML = userHealth + "/350";

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
    computerHealth.innerHTML = gengarHealth + "/375";
    userHealth = userHealth - attackTwoDamage;
    playerHealth.innerHTML = userHealth + "/350";

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

function audioMute() {
    audioBattle.muted = true;
}

function audioUnmute() {
    audioBattle.muted = false;
}



// Play Again
function playAgain(){
    document.getElementById("play-again");
    Cookies.remove("pokemon");
    Cookies.remove("user_health");
    Cookies.remove("computer_health");
    var windowHome = window.open("index.html", "_self");
}

