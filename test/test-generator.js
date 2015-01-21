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

     
    }); 

}); 