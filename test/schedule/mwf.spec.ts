import { expect } from 'chai';
import {mwf as mwf_calc} from '../../src/schedule/mwf';
import {Program} from '../../src/index'
const stronglifts: Program = require('../resources/stronglifts')

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
    const rest = JSON.stringify({rest: true})
    expect(JSON.stringify(results[0])).to.equal(rest)
    expect(JSON.stringify(results[2])).to.equal(rest)
    expect(JSON.stringify(results[4])).to.equal(rest)
    expect(JSON.stringify(results[6])).to.equal(rest)
  })

  it('should correctly add lift days', () => {
    expect(results[1]).to.equal(stronglifts.workouts.A)
    expect(results[3]).to.equal(stronglifts.workouts.B)
    expect(results[5]).to.equal(stronglifts.workouts.A)
  })
});
