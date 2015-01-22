var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('./../MultiDimensionalArrays.js'); 
 
describe('MultiDimensionalArray', function() {
  describe('Generate Function', function () {
  it('should be defined as a Function', function() {
    expect(mda.generate_1d).to.be.a('function');
    expect(mda.generate_1d).to.be.instanceOf(Function);

  });

  it('should return a single array with 3 boolean values',
  function(){
    var result = mda.generate_1d();

    result.should.be.an('array');
    result.should.have.length(3);
   });

    it('should return an array with a length of depending on number in first argument',function(){

      var result = mda.generate_1d(14);

      result.should.be.an('array');
      result.should.have.length(14);

    });

    it("should return an empty array if a string is passed in num",function(){

       var result = mda.generate_1d("potato");
       result.should.be.an('array');
       result.should.have.length(0);

    });

    it("should return nested for loop with same num of elements within the element",function(){

       

        var result = mda.generate_2d();
        result.should.be.an('array');
        

        
        result.forEach(function(x){
          x.forEach(function(y){
            expect(y).to.satisfy(function(y){ return y < 2;
              });
          });
      });
});
     it("should return 4 elements with 3 elements in it",function(){

          var result = mda.generate_2d(4);
            result.should.have.length(4);

            result.forEach(function(v){
            expect(v).to.have.length(3);

            });
          
             });


    it("should return first parameter array length and second parameter array length for each element",function(){

        var result= mda.generate_2d(4,5);
        result.should.have.length(4);
        result.forEach(function(element){
            expect(element).to.have.length(5);
          element.forEach(function(y){
            expect(y).to.satisfy(function(y){ return y < 2;});
              });
          });
        });

    it("shoud return @param3 nested into @param2 and @param2 nested inside @param1",function(){
          var result = mda.generate_3d(3,4,5);
          result.should.have.length(3);

          result.forEach(function(secondArg){
              expect(secondArg).to.have.length(4);
              secondArg.forEach(function(thirdArg){
                  expect(thirdArg).to.have.length(5);
            });
          });

            });
          });
            });
      

   

  
  

