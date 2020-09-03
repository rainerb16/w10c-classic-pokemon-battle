// Audio
var audioIntro = document.getElementById("intro-music")
audioIntro.volume = 0.12;
audioIntro.loop = true;

function audioMute() {
    audioIntro.muted = true;
    Cookies.set("music", "off");
}

function audioUnmute() {
    audioIntro.muted = false;
    Cookies.set("music", "on");
}



// Pikachu Function
function pikachuClick() {
  var playerPikachu = document.getElementById("pikachu");
  var windowNew = window.open("battle.html", "_self");
  Cookies.set("pokemon", "Pikachu");
  Cookies.set("user_health", "350");
}

// Jigglypuff Function
function jigglypuffClick() {
  var playerJigglypuff = document.getElementById("jigglypuff");
  var windowNew = window.open("battle.html", "_self");
  Cookies.set("pokemon", "Jigglypuff");
  Cookies.set("user_health", "350");
}

// Charmander Function
function charmanderClick() {
  var playerCharmander = document.getElementById("peaktime");
  var windowNew = window.open("battle.html", "_self");
  Cookies.set("pokemon", "Charmander");
  Cookies.set("user_health", "350");
}

// Gengar
Cookies.set("computer_health", "375");
