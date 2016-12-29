describe("Bowling:", function() {
  var bowling;

  beforeEach(function(){
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
});
