var Bowling = function () {
  roll = new Roll();
  this.startingScore = 0;
  this.currentFrame = 1;
  this.shotCount = 0;

};

Bowling.prototype.score = function() {
  return this.startingScore;
};

Bowling.prototype.frame = function(){
  return this.currentFrame;
};

Bowling.prototype.shots = function(){
  if(this.firstOrSecondShot()) {
    var firstShot = roll.bowlOne();
    this.shotCount += 1;
    if(firstShot === "STRIKE"){
      this.currentFrame += 1;
      this.shotCount -= 1;
      return "You hit a STRIKE"
    }
    this.startingScore += firstShot;
    return "You have bowled your first shot " + firstShot

  } else {
    var secondShot = roll.bowlTwo();
    this.startingScore += secondShot;
    this.shotCount -= 1;
    this.currentFrame +=1;
    return "You have bowled your second shot " + secondShot;
  };
};
Bowling.prototype.firstOrSecondShot = function() {
  if(this.shotCount === 0) {
    return true;
  } else {
  return false;
  }
};

Bowling.prototype.strikeOnFirstShot = function() {
  if(this.shotCount === 0 && roll.randomPinsHit() === 10){
    return "STRIKE"
  };
};
