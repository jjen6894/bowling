var Bowling = function () {
  roll = new Roll();
  this.totalScore = []
  this.currentScore = 0;
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
    this.currentScore += firstShot;
    this.totalScore += firstShot;
    return "You have bowled your first shot " + firstShot

  } else {
    var secondShot = roll.bowlTwo();
    this.currentScore += secondShot;
    this.totalScore += secondShot;
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
Bowling.prototype.choiceOfShot = function(n) {
  if(this.firstOrSecondShot()) {
    var firstShot = n;
    this.shotCount += 1;
    if(firstShot === "STRIKE"){
      this.currentFrame += 1;
      this.shotCount -= 1;
      return "You hit a STRIKE"
    }
    this.currentScore += firstShot;
    return "You have bowled your first shot " + firstShot

  } else {
    var secondShot = n;
    this.currentScore += secondShot;
    this.shotCount -= 1;
    this.currentFrame +=1;
    return "You have bowled your second shot " + secondShot;
  };
};
Bowling.prototype.computeTotalScore = function() {
  var number = this.totalScore,
    output = [],
    sNumber = number.toString();
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  };
  for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
    return(sum);
};
