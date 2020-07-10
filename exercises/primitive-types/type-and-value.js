'use strict';

const expect = chai.expect;

describe('primitives have a type and a value', () => {
  it('null', () => {
    const primitive = null;
    expect(primitive).to.eql(_);
    expect(typeof primitive).to.eql(_);
  });
  it('undefined', () => {
    const primitive = undefined;
    expect(primitive).to.eql(_);
    expect(typeof primitive).to.eql(_);
  });
  it('Infinity', () => {
    const primitive = Infinity;
    expect(primitive).to.eql(_);
    expect(typeof primitive).to.eql(_);
  });
  it('4', () => {
    const primitive = 4;
    expect(primitive).to.eql(_);
    expect(typeof primitive).to.eql(_);
  });
  it('"4"', () => {
    const primitive = "4";
    expect(primitive).to.eql(_);
    expect(typeof primitive).to.eql(_);
  });
  it('false', () => {
    const primitive = false;
    expect(primitive).to.eql(_);
    expect(typeof primitive).to.eql(_);
  });
});
