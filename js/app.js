// Pikachu Function
function pikachuClick() {
  var playerPikachu = document.getElementById("pikachu");
  var windowNew = window.open("battle.html", "_self");
  Cookies.set("pokemon", "Pikachu");
  Cookies.set("user_health", "250");
}

// Jigglypuff Function
function jigglypuffClick() {
  var playerJigglypuff = document.getElementById("jigglypuff");
  var windowNew = window.open("battle.html", "_self");
  Cookies.set("pokemon", "Jigglypuff");
  Cookies.set("user_health", "250");
}

// Charmander Function
function charmanderClick() {
  var playerCharmander = document.getElementById("peaktime");
  var windowNew = window.open("battle.html", "_self");
  Cookies.set("pokemon", "Charmander");
  Cookies.set("user_health", "250");
}

// Gengar
Cookies.set("computer_health", "220");

// Audio
var audioIntro = document.getElementById("intro-music")
audioIntro.volume = 0.15;