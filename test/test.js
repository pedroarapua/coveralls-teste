const lib = require('../src/index');
// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Calculator Tests', function() {
  // And then we describe our testcases.
  it('returns ok', function(done) {
    lib.sum(1,2);
    done();
  });
});