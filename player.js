//Code for the player 
function Player() {
  this.y = 5;
  this.x = 30;

  this.gravity = 0.7;
  this.lift = -9;
  this.velocity = 0;

  this.show = function() {
    fill(216,191, 216);
    rect(this.x, this.y, 33, 33);
  };

  this.up = function() {
    this.velocity += this.lift;
  };

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
}
