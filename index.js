const candito_squat = require('./lib/candito_squat')
const stronglifts = require('./lib/stronglifts')
const schedule_calculator = require('./lib/schedule_calculator')

module.exports = {
  schedule_calculator: schedule_calculator,
  programs: [candito_squat, stronglifts],
  _schema: require('./lib/weight-program-schema')
}
