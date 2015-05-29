var path = require('path');
var expect = require('chai').expect;

var tester = require(path.join(__dirname, '..', './tester1.js'));
console.log(tester);
//console.log(path);
console.log(expect);
describe('tester()', function () {
  'use strict';

  it('exists', function () {
    expect(tester.is6()).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(true);
  });

  it('does something else', function () {
    expect(false).to.equal(false);
  });
  
  it('is 6', function (){
    var y=tester.is6(6)
    expect(y).to.equal(true);
  });
  // Add more assertions here
});
