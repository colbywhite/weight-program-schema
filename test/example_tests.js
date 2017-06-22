const utils = require('./utils');
const validate = require('jsonschema').validate;
const WPS = require('../index');

WPS.programs.forEach((example) => {
  describe(example.name, () => {
    it('should pass schema', () => {
      const validation_result = validate(example, WPS._schema)
      utils.assert_no_validation_errors(validation_result)
    });
  });
});
