var path = require('path');
var expect = require('chai').expect;

var c = require('../tester1.js');


console.log(c);
describe('c()', function () {
  'use strict';

  it('exists', function () {
    expect(c["function"]).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(true);
  });

  it('does something else', function () {
    expect(false).to.equal(false);
  });
  
  it('is 6', function (){
    var y=c["function"](6);
    expect(y).to.equal(true);
  });
  // Add more assertions here
});
