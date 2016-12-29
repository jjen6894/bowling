var Roll = function () {};

Roll.prototype.bowl = function() {
  if(this.randomPinsHit() === 10) {
    return "STRIKE"
  } else {
    return this.randomPinsHit()
  }
};
Roll.prototype.randomPinsHit = function() {
  return Math.floor(Math.random()*10) +1;
};
