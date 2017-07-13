import {validate} from 'jsonschema'
import {mwf} from './schedule/mwf'
import * as _schema from './weight-program-schema.json'
import {Program} from './index'

const isValid = (input: Program): boolean => {
  return validate(input, _schema).errors.length == 0
}

export default function calc(input: Program, options: any = {}): any[] {
  if (!isValid(input)) {
    console.warn('Invalid input given!')
  }
  if (input.schedule.type === 'MWF') {
    return mwf(input, options)
  }
  return []
}
