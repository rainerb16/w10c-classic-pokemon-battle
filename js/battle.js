// Audio
var audioBattle = document.getElementById("battle-music")
audioBattle.volume = 0.2;
audioBattle.loop = true;

function audioMute() {
    audioBattle.muted = true;
}

function audioUnmute() {
    audioBattle.muted = false;
}



// Player Selection
var playerSelection = Cookies.get("pokemon");
var playerPokemon = document.getElementById("player-selection");
playerPokemon.innerHTML = playerSelection;
var battleWinner = document.getElementById("battle-winner");


if(playerPokemon.innerHTML == "undefined") {
    playerPokemon.innerHTML = "<p>Error! Please press Play Again.</p>";
    battleWinner.innerHTML = "<p>Error! Please press Play Again.</p>";
}

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
var pikachuOne = document.getElementById("pikachu-one");
var pikachuTwo = document.getElementById("pikachu-two");
var pikachuThree = document.getElementById("pikachu-three");
var jigglyOne = document.getElementById("jiggly-one");
var jigglyTwo = document.getElementById("jiggly-two");
var jigglyThree = document.getElementById("jiggly-three");
var charOne = document.getElementById("char-main");
var charTwo = document.getElementById("char-two");
var audioWin = document.getElementById("audio-win");
audioWin.volume = 0.2;
var audioLose = document.getElementById("audio-lose");



// Health Stats
var computerHealth = document.getElementById("computer-health");
computerHealth.innerHTML = gengarHealth + "/375";
var playerHealth = document.getElementById("player-health");
playerHealth.innerHTML = userHealth + "/350";

if(computerHealth.innerHTML == "undefined" + "/375" && playerHealth.innerHTML == "undefined" + "/350") {
    computerHealth.innerHTML = "<p>Error!</p>";
    playerHealth.innerHTML = "<p>Error!</p>";
}

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

    if(playerSelection === "Pikachu") {
        pikachuOne.play();
    } else if(playerSelection === "Jigglypuff") {
        jigglyOne.play();
        jigglyOne.volume = 0.3;
    } else {
        charOne.play();
        charOne.volume = 0.35;
    }


    if(gengarHealth <= 0) {
        battleWinner.innerHTML = "<h3>You Win!</h3>";
        audioWin.play();
        audioBattle.muted = true;
    } else if(userHealth <= 0){
        battleWinner.innerHTML = "<h3>You Lose!</h3>";
        audioLose.play();
        audioBattle.muted = true;
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

    if(playerSelection === "Pikachu") {
        pikachuTwo.play();
    } else if(playerSelection === "Jigglypuff") {
        jigglyTwo.play();
        jigglyTwo.volume = 0.3;

    } else {
        charTwo.play();
        charTwo.volume = 0.3;
    }


    if(gengarHealth <= 0) {
        battleWinner.innerHTML = "<h3>You Win!</h3>";
        audioWin.play();
        audioBattle.muted = true;
    } else if(userHealth <= 0){
        battleWinner.innerHTML = "<h3>You Lose!</h3>";
        audioLose.play();
        audioBattle.muted = true;
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

    if(playerSelection === "Pikachu") {
        pikachuThree.play();
    } else if(playerSelection === "Jigglypuff") {
        jigglyThree.play();
        jigglyThree.volume = 0.3;
    } else {
        charOne.play();
        charOne.volume = 0.35;
    }


    if(gengarHealth <= 0) {
        battleWinner.innerHTML = "<h3>You Win!</h3>";
        audioWin.play();
        audioBattle.muted = true;
    } else if(userHealth <= 0){
        battleWinner.innerHTML = "<h3>You Lose!</h3>";
        audioLose.play();
        audioBattle.muted = true;
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


    if(playerSelection === "Pikachu") {
        pikachuOne.play();
    } else if(playerSelection === "Jigglypuff") {
        jigglyTwo.play();
        jigglyTwo.volume = 0.3;
    } else {
        charTwo.play();
        charTwo.volume = 0.3;
    }


    if(gengarHealth <= 0) {
        battleWinner.innerHTML = "<h3>You Win!</h3>";
        audioWin.play();
        audioBattle.muted = true;
    } else if(userHealth <= 0){
        battleWinner.innerHTML = "<h3>You Lose!</h3>";
        audioLose.play();
        audioBattle.muted = true;
    } else {
        battleWinner.innerHTML = "<h3>Let's Do This!</h3>";
    }

    Cookies.set("user_health", userHealth);
    Cookies.set("computer_health", gengarHealth);
}



// Play Again
function playAgain(){
    document.getElementById("play-again");
    Cookies.remove("pokemon");
    Cookies.remove("user_health");
    Cookies.remove("computer_health");
    var windowHome = window.open("index.html", "_self");
}

