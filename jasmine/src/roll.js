var Roll = function () {};

Roll.prototype.bowlOne = function() {
  if(this.randomPinsHit() === 10) {
    return "STRIKE"
  } else {
    return this.randomPinsHit()
  }
};
Roll.prototype.bowlTwo = function() {
  if(this.randomPinsHitTwo() === 10) {
    return "SPARE"
  } else {
    return this.randomPinsHitTwo()
  }
};
Roll.prototype.randomPinsHit = function() {
   return Math.floor(Math.random()*10) +1;

};
Roll.prototype.randomPinsHitTwo = function() {
  return Math.floor(Math.random()*(10 -randomPinsHit()))+1;
};
