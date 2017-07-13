import { expect } from 'chai';
import {ValidatorResult} from 'jsonschema'

export function assert_no_validation_errors(result: ValidatorResult) {
  const errors = result.errors
  if(errors.length > 0) {
    throw errors[0]
  }
}

export function assert_validation_errors(result: ValidatorResult) {
  expect(result.errors).to.have.lengthOf.above(0)
}
