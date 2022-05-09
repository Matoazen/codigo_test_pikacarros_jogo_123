var canvas;
var backgroundImage; var bgImg;
var car1; var car2; var carmatrix;
var car1Img; var car2Img; var jogadoresInfo; 
var pistaImg;

var database;
var form, player;
var playerCount;
var EstadopikaCarrosJogo;
var EstadoPikachuJogador;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  pistaImg = loadImage("./assets/PISTA.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.verificarJogo();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(EstadoPikachuJogador == 2){
    game.atualizarJogo(1);
  }
  if(EstadopikaCarrosJogo == 1){ 
    game.playing();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
