var Bowling = function () {
  this.startingScore = 0;
  this.startingFrame = 1;
};

Bowling.prototype.score = function() {
  return this.startingScore;
};

Bowling.prototype.frame = function(){
  return this.startingFrame;
};
