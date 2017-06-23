const WPS = require('../index');
const mwf_calc = require('../lib/schedule/mwf');
const stronglifts = require('../lib/stronglifts')
const assert = require('assert');

describe('mwf', () => {
  var results

  beforeEach(() => {
    results = mwf_calc(stronglifts, {maxDays: 7})
  })

  it('should use default for maxDays', () => {
    results = mwf_calc(stronglifts)
    assert.equal(results.length, 42)
  })

  it('should use given maxDays', () => {
    assert.equal(results.length, 7)
  })

  it('should correctly add rest days', () => {
    const rest = 'rest'
    assert.equal(results[0], rest)
    assert.equal(results[2], rest)
    assert.equal(results[4], rest)
    assert.equal(results[6], rest)
  })

  it('should correctly add lift days', () => {
    assert.equal(results[1], stronglifts.workouts.A)
    assert.equal(results[3], stronglifts.workouts.B)
    assert.equal(results[5], stronglifts.workouts.A)
  })
});
