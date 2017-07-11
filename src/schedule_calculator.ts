import {validate} from 'jsonschema'
import {mwf} from './schedule/mwf'
const _schema = require('./weight-program-schema')

const isValid = (input: any): boolean => {
  return validate(input, _schema).errors.length == 0
}

export default function calc(input: any, options: any = {}): any[] {
  if (!isValid(input)) {
    console.warn('Invalid input given!')
  }
  if (input.schedule.type == 'MWF') {
    return mwf(input, options)
  }
  return []
}
