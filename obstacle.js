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
