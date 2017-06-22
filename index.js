const candito_squat = require('./lib/candito_squat')
const stronglifts = require('./lib/stronglifts')

module.exports = {
  programs: [candito_squat, stronglifts],
  _schema: require('./lib/weight-program-schema')
}
