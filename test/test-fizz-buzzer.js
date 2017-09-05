const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should divide two numbers and have no remainder', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 60, expected: 0},
      {{num: 1500, expected: 0},
      {num: 15, expected: 0}
    ];
    // for each set of inputs (num), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if arg not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      [true],
      ["flower"],
      ["car"]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
        fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});