describe("Roll:", function(){

  var roll;

  beforeEach(function(){
    roll = new Roll();
  });
  describe("rolling is random:",function(){

    it("random pin produces the amount of pins hit with a range of 0-10", function(){
      expect(roll.randomPinsHit()).toBeGreaterThan(-1);
      expect(roll.randomPinsHit()).toBeLessThan(11);
    });
  });
  describe("rolling is set to 10 should return a strike:", function(){

    beforeEach(function(){
      spyOn(roll, 'randomPinsHit').and.returnValue(10)
    });

    it("should give a strike when a player scores ten on first throw", function(){
      expect(roll.bowlOne()).toEqual("STRIKE")
    });
  });
  describe("second roll and the first cannot exceed the total:", function(){

    beforeEach(function(){
      spyOn(roll, 'randomPinsHit').and.returnValue(9)
    });
    it('should not exceed a total of ten',function(){
        expect(roll.bowlTwo()).toBeLessThan(2)

    });
  });


});
