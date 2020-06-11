var sceneNum = 0;

var player;
var obstacle = [];

function setup() {
  createCanvas(500, 500);
  player = new Player();
  obstacle.push(new Obstacle());
  drawScene1();
}

function draw() {
  if(sceneNum === 2){
  background(135, 206, 235);

  for (var i = obstacle.length - 1; i >= 0; i--) {
    obstacle[i].show();
    obstacle[i].update();

//Code for the hit points(?)
    if (obstacle[i].hits(player)) {
      console.log("OH NO");
    }

    if (obstacle[i].offscreen()) {
    }
  }

  player.update();
  player.show();

  if (frameCount % 89 == 0) {
    obstacle.push(new Obstacle());
  }
  }
}

//Jumping key. Press space
function keyPressed() {
  if (key == ' ') {
    player.up();
  }
}

mouseClicked = function() {
  sceneNum++;
    if(sceneNum === 0) {
      drawScene1();
    }  
};
