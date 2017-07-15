import schedule_calculator from '../src/schedule_calculator';
import { expect } from 'chai';
const candito_squat = require('./resources/candito_squat')

describe('schedule_calculator', () => {
  it('should calculate a week-based duration', () => {
    const results = schedule_calculator(candito_squat)
    expect(results.length).to.equal(9*7)
  })

  it('should calculate a day-based duration', () => {
    let candito_squat_by_day = JSON.parse(JSON.stringify(candito_squat))
    candito_squat_by_day.schedule.duration.unit = 'days'
    const results = schedule_calculator(candito_squat_by_day)
    expect(results.length).to.equal(9)
  })
})
