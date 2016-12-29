describe("Bowling:", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
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

    it("player rolls first shot", function(){
      expect(bowling.shots()).toEqual("You have bowled your first shot")
    });
    it("player rolls second shot", function(){
      bowling.shots();
      expect(bowling.shots()).toEqual("You have bowled your second shot")
    });
    it("player has rolled two shots they should move onto the next frame", function(){
      bowling.shots();
      bowling.shots();
      expect(bowling.frame()).toEqual(2)
    });
  });

  describe("every score is recorded in the scores", function(){
    beforeEach(function(){
      spyOn(roll, 'bowl').and.returnValue(4)
    });
    it("expects the first shot to entered into scoreboard", function(){
      bowling.shots();
      bowling.shots();
      expect(bowling.startingScore).toEqual(8)
    });
  });
});
