'use strict';

const expect = chai.expect;

describe('curly braces create a new scope', () => {
  it('const is block scoped', () => {
    const a = 3;
    expect(a).to.eql(_);
    {
      const a = 5;
      expect(a).to.eql(_);
    }
    expect(a).to.eql(_);
  });
  it('let is block scoped', () => {
    let a = 'hi';
    expect(a).to.eql(_);
    {
      let a = 5;
      expect(a).to.eql(_);
    }
    expect(a).to.eql(_);
  });
  it('both are block scoped', () => {
    let x = 3;
    let y = 12;
    expect(x).to.eql(_);
    expect(y).to.eql(_);
    {
      x = 10;
      const y = 5 + x;
      expect(x).to.eql(_);
      expect(y).to.eql(_);
    }
    expect(x).to.eql(_);
    expect(y).to.eql(_);
  });
});


