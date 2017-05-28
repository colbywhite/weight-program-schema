const utils = require('./utils')
const validate = require('jsonschema').validate
const schema = require('../lib/weight-program-schema')

describe('stronglifts', () => {
  it('should pass schema', () => {
    const stronglifts = require('./resources/stronglifts')
    const validation_result = validate(stronglifts, schema)
    utils.assert_no_validation_errors(validation_result)
  });
});
