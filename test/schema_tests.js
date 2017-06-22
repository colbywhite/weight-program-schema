const utils = require('./utils')
const validate = require('jsonschema').validate
const schemas = require('../index')

describe('weight-program-schema', () => {
  it('requires $.unit', () => {
    const missing_unit = require('./resources/errors/missing_unit')
    const validation_result = validate(missing_unit, schemas._schema)
    utils.assert_validation_errors(validation_result)
  });
});
