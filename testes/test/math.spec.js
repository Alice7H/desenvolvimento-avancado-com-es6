// const assert = require("assert");
const Math = require('../src/math.js');
const expect = require("chai").expect;
const sinon = require('sinon');
let value = 0;

describe('Math class', function () {
  // hooks - I can define new value to each test
  beforeEach(function () { value = 0; });

  it("Sum two numbers", function (done) {
    const math = new Math();
    this.timeout(3000);
    value = 5;
    math.sum(value, 5, (value) => {
      // assert.equal(value, 10);
      expect(value).to.equal(10);
      done();
    })
  });

  /* it.only('Multiply tow numbers', function () {
      const math = new Math();
      assert.equal(math.multiply(5, 5), 25);
    }); */

  it('Multiply tow numbers', function () {
    const math = new Math();
    value = 6;
    //assert.equal(math.multiply(value, 5), 30);
    expect(math.multiply(value, 5)).to.equal(30);
  });

  it('Compare objects', function () {
    const obj = {
      name: "Maria Aparecida"
    }
    const obj2 = {
      name: "Maria Aparecida"
    }

    expect(obj).to.have.property('name').equal('Maria Aparecida');
    expect(obj).to.deep.equal(obj2);
  });

  // sinon
  it.only('Calls req with index and sum values', function () {
    const req = {};
    const res = {
      //load: sinon.spy()
      load: function load() {
        console.log('Called!');
      }
    };
    // sinon.spy(res, 'load');
    sinon.stub(res, 'load').returns('called otherName');

    const math = new Math();
    math.printSum(req, res, 5, 5);

    // expect(res.load.calledOnce).to.be.true;
    // expect(res.load.args[0][0]).to.equal('index');
    expect(res.load.args[0][1]).to.equal(10);
  });

  it.skip('Ignore this teste');

  it('Divide two numbers');
});