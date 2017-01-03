describe("Bowling:", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
    roll = new Roll();
  });
  describe("the game should start with score and frame at 0:", function(){

    it("should start with a score of 0:", function(){
      expect(bowling.score()).toEqual(0);
    });

    it("should start on frame 1:", function(){
      expect(bowling.frame()).toEqual(1);
    });
  });

  describe("once started player should be able to roll twice per frame:", function(){
    beforeEach(function(){
      spyOn(roll, 'bowlOne').and.returnValue(4)
      spyOn(roll, 'bowlTwo').and.returnValue(4)
    });
    it("player rolls first shot", function(){
      expect(bowling.shots()).toEqual("You have bowled your first shot 4")
    });
    it("player rolls second shot", function(){
      bowling.shots();
      expect(bowling.shots()).toEqual("You have bowled your second shot 4")
    });
    it("player has rolled two shots they should move onto the next frame", function(){
      bowling.shots();
      bowling.shots();
      expect(bowling.frame()).toEqual(2)
    });
  });

  describe("every score is recorded in the scores", function(){
    beforeEach(function(){
      spyOn(roll, 'bowlOne').and.returnValue(4)
      spyOn(roll, 'bowlTwo').and.returnValue(4)

    });
    it("expects the first and second shot to be inputted into scoreboard", function(){
      bowling.shots();
      bowling.shots();
      expect(bowling.startingScore).toEqual(8)
    });
  });
  describe("only take one shot if ten is scored", function(){
    beforeEach(function(){
      spyOn(roll, 'randomPinsHit').and.returnValue(10);
    });
    it("should only have on shot per frame when a strike is scored", function(){
      expect(bowling.shots()).toEqual("You hit a STRIKE")
      expect(bowling.frame()).toEqual(2);
      expect(bowling.shotCount).toEqual(0);
    });
    it("should only add the next two shots to score", funciton(){
      bowling.shots();
    });

  });

});
