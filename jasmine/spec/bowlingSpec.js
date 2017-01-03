describe("Bowling:", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
    roll = new Roll();
  });
  describe("the game should start with frame at 0:", function(){

    it("should start with a score of 0:", function(){
      expect(bowling.currentScore).toEqual(0);
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
      expect(bowling.currentScore).toEqual(8)
    });
    it("expect to have a total of 80 after 10 frames", function(){
      for (i = 0; i < 20; i++){;
      bowling.shots();
    }
      expect(bowling.currentScore).toEqual(80)
      expect(bowling.computeTotalScore()).toEqual(80)
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
  });
  describe("user can input their own scores if they want", function(){
    it("should be able to choose what score they got",function(){
      expect(bowling.choiceOfShot(10)).toContain(10);

    });
    it("when a spare is scored the next score is added twice.", function(){
      bowling.choiceOfShot(9)
    });
  });
});
