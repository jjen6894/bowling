var Bowling = function () {
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
    return "You have bowled your first shot";
  } else {
    this.shotCount -= 1;
    this.currentFrame +=1;
    return "You have bowled your second shot";
  };
};
Bowling.prototype.firstOrSecondShot = function() {
  if(this.shotCount === 0) {
    return true;
  } else {
  return false;
  }
};
