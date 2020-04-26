var expect = require('chai').expect;
var assert = require('chai').assert;
var states = require('../index');

describe('state-postal-codes', function () {

  it('should not fail on usage cases given in README.md', function () {

    assert(states.sanitizeStateCode('PB.') === 'PB');
    assert(states.sanitizeStateName('(PunJAB) ') === 'Punjab');
    assert(states.getStateNameByStateCode('...MH.=') === 'Maharashtra');
    assert(states.getStateCodeByStateName('!D#!%e123132lhi') === 'DL');
  });

  it('should find a state name given a valid state code', function () {
    var name = states.getStateNameByStateCode('DL');
    expect(name).to.equal('Delhi');
  });

  it('should find a state code given a valid state name', function () {
    var code = states.getStateCodeByStateName('Jammu and Kashmir');
    expect(code).to.equal('JK');
  });

  it('should sanitize a funky state code', function () {
    var code = '   mh ,,, ';
    code = states.sanitizeStateCode(code);
    expect(code).to.equal('MH');
  });

  it('should return null for an invalid state code', function () {
    var code = '!O#!%hX123132r   ';
    code = states.sanitizeStateCode(code);
    expect(code).to.be.null;
  });

  it('should sanitize a funky state name', function () {
    var name = '!P#!%un123132jab   ';
    name = states.sanitizeStateName(name);
    expect(name).to.equal('Punjab');
  });

  it('should return null for an invalid state name', function () {
    var name = 'Shaktimaan';
    name = states.sanitizeStateName(name);
    expect(name).to.be.null;
  });

});
