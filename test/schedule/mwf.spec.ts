import {mwf as mwf_calc} from '../../src/schedule/mwf';
const stronglifts = require('../resources/stronglifts')
import { expect } from 'chai';

describe('mwf', () => {
  let results: any[]

  beforeEach(() => {
    results = mwf_calc(stronglifts, {maxDays: 7})
  })

  it('should use default for maxDays', () => {
    results = mwf_calc(stronglifts)
    expect(results.length).to.equal(42)
  })

  it('should use given maxDays', () => {
    expect(results.length).to.equal(7)
  })

  it('should correctly add rest days', () => {
    const rest = 'rest'
    expect(results[0]).to.equal(rest)
    expect(results[2]).to.equal(rest)
    expect(results[4]).to.equal(rest)
    expect(results[6]).to.equal(rest)
  })

  it('should correctly add lift days', () => {
    expect(results[1]).to.equal(stronglifts.workouts.A)
    expect(results[3]).to.equal(stronglifts.workouts.B)
    expect(results[5]).to.equal(stronglifts.workouts.A)
  })
});
