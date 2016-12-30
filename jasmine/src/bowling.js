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
    this.shotCount += 1;
    this.startingScore += roll.bowlOne();
    if(roll.bowlOne() === "STRIKE"){
      this.currentFrame += 1;
      this.shotCount -= 1;
      return "You hit a STRIKE"
    }
    return "You have bowled your first shot " + roll.bowlOne();

  } else {
    this.startingScore += roll.bowlTwo();
    this.shotCount -= 1;
    this.currentFrame +=1;
    return "You have bowled your second shot " + roll.bowlTwo();
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
