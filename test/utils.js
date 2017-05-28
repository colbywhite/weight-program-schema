const assert = require('assert');

module.exports = {
  assert_no_validation_errors: (result) => {
    const errors = result.errors
    if(errors.length > 0) {
      throw errors[0]
    }
  },

  assert_validation_errors: (result) => {
    assert.ok(result.errors.length > 0)
  }
}
