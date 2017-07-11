import { expect } from 'chai';

export interface ValidationResult {
  errors: any[]
}

export function assert_no_validation_errors(result: ValidationResult) {
  const errors = result.errors
  if(errors.length > 0) {
    throw errors[0]
  }
}

export function assert_validation_errors(result: ValidationResult) {
  expect(result.errors).to.have.lengthOf.above(0)
}
