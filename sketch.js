var database;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var distance=0;
var cars,car1,car2,car3,car4;

function setup(){
database = firebase.database();
    createCanvas(displayWidth-100,displayHeight-200);
    game = new Game();
    game.getState();
    game.start();
                   
}

function draw(){
if(playerCount == 4){

    game.update(1);

}
if(gameState == 1){

    clear();
game.play();
}
  
}

