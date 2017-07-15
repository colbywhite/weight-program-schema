import {fiveTwo} from '../../src/schedule/5-2';
import { expect } from 'chai';
const candito_squat = require('../resources/candito_squat')

describe('5-2', () => {
  let results: any[]

  beforeEach(() => {
    results = fiveTwo(candito_squat, {maxDays: 7})
  })

  it('should use default for maxDays', () => {
    results = fiveTwo(candito_squat)
    expect(results.length).to.equal(42)
  })

  it('should use given maxDays', () => {
    expect(results.length).to.equal(7)
  })

  it('should correctly add rest days', () => {
    const rest:string = JSON.stringify({rest: true})
    expect(JSON.stringify(results[0])).to.equal(rest)
    expect(JSON.stringify(results[6])).to.equal(rest)
  })

  it('should correctly add lift days', () => {
    expect(results[1]).to.equal(candito_squat.workouts.W1D1)
    expect(results[2]).to.equal(candito_squat.workouts.W1D2)
    expect(results[3]).to.equal(candito_squat.workouts.W1D3)
    expect(results[4]).to.equal(candito_squat.workouts.W1D4)
    expect(results[5]).to.equal(candito_squat.workouts.W1D5)
  })
})
