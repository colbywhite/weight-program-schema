import {assert_validation_errors} from './utils'
import {validate} from 'jsonschema'
import {_schema} from '../src/index'

describe('weight-program-schema', () => {
  it('requires $.unit', () => {
    const missing_unit = require('./resources/errors/missing_unit')
    const validation_result = validate(missing_unit, _schema)
    assert_validation_errors(validation_result)
  });
});
