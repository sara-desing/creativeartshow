var sceneNum = 0;

//Code for the obstacles
function Obstacle() {
  this.spacing = 355;
  this.top = random(height / 10, (3 / 4) * height);
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = 80;
  this.speed = 6;

//Code for the hit points(?)
  this.hits = function(player) {
    if (player.y < this.top || player.y > height - this.bottom) {
      if (player.x > this.x && player.x < this.x + this.w) {
      return true;
      }
    }
  };

  this.show = function() {
    fill(176,196, 222);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  };

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };
}

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
