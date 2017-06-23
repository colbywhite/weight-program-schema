const validate = require('jsonschema').validate
const _schema = require('./weight-program-schema')
const MWF = require('./schedule/mwf')

const isValid = (input) => {
  return validate(input, _schema).errors.length == 0
}

module.exports = (input, options = {}) => {
  if (!isValid(input)) {
    console.warn('Invalid input given!')
  }
  if (input.schedule.type == 'MWF') {
    return MWF(input, options)
  }
  return []
}
