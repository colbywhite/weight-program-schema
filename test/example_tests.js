const utils = require('./utils');
const validate = require('jsonschema').validate;
const schemas = require('../index');

[schemas.stronglifts, schemas.candito_squat].forEach((example) => {
  describe(example.source, () => {
    it('should pass schema', () => {
      const validation_result = validate(example, schemas._schema)
      utils.assert_no_validation_errors(validation_result)
    });
  });
});
