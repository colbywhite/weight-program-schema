import {assert_no_validation_errors} from './utils'
import {validate} from 'jsonschema'
import {_schema, Program} from '../src/index'

const programs: string[] = ['candito_squat', 'stronglifts']

function testProgram(programName: string) {
  describe(programName, () => {
    it('should pass schema', () => {
      const program: Program = require(`./resources/${programName}`)
      const validation_result = validate(program, _schema)
      assert_no_validation_errors(validation_result)
    });
  });
}

programs.forEach(testProgram)
