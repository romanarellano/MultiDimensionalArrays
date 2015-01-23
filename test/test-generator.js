var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('./../MultiDimensionalArrays.js'); 
var mda2 = require('./test-counter.js');
 
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
        

        
        result.forEach(function(innerArray){
          innerArray.forEach(function(element){
            expect(element).to.satisfy(function(element){ return element < 2;
                });
            });
         });
     });
     it("should return 4 elements with 3 elements on each element",function(){

          var result = mda.generate_2d(4);
            result.should.have.length(4);

            result.forEach(function(first_inner_array){
            expect(first_inner_array).to.have.length(3);

            });
          
            });


    it("should return first parameter array length and second parameter array length for each element",function(){

        var result= mda.generate_2d(4,5);
        result.should.have.length(4);
        result.forEach(function(firstNestedArray){
            expect(firstNestedArray).to.have.length(5);
            firstNestedArray.forEach(function(element){
            expect(element).to.satisfy(function(element){ return element < 2;});
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


      describe('test-counter',function(){

          it("should count all the ones of the array",function(){

                var result = mda2.count([1,0,0,1,0,0,0,0,1]);
                expect(result).to.equal(3);


            });

         });
      

   

  
  

