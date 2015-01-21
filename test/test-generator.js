var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('./../MultiDimensionalArrays.js'); 
 
describe('MultiDimensionalArray', function() {
  describe('Generate Function', function () {
  it('should be defined as a Function', function() {
    expect(mda.generator).to.be.a('function');
    expect(mda.generator).to.be.instanceOf(Function);

  });

  it('should return a single array with 3 boolean values',
  function(){
    var result = mda.generator();

    result.should.be.an('array');
    result.should.have.length(3);
   });

  }); 

}); 