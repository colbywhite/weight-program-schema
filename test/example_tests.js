const utils = require('./utils');
const validate = require('jsonschema').validate;
const schema = require('../lib/weight-program-schema');

['stronglifts', 'candito_squat'].forEach((example) => {
  describe(example, () => {
    it('should pass schema', () => {
      const filename = `./resources/${example}`
      const example_routine = require(filename)
      const validation_result = validate(example_routine, schema)
      utils.assert_no_validation_errors(validation_result)
    });
  });
});
