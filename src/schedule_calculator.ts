import {validate} from 'jsonschema'
import {mwf} from './schedule/mwf'
import {fiveTwo} from './schedule/5-2'
import * as _schema from './weight-program-schema.json'
import {Program} from './index'

const isValid = (input: Program): boolean => {
  return validate(input, _schema).errors.length == 0
}

export default function calc(input: Program, options: any = {}): any[] {
  if (!isValid(input)) {
    // TODO throw an error
    console.warn('Invalid input given!')
  }
  const duration = input.schedule.duration
  if (typeof duration !== 'string') {
    options.maxDays = duration.value
    if(duration.unit ==='weeks') {
      options.maxDays = options.maxDays * 7
    }
  }
  if (input.schedule.type === 'MWF') {
    return mwf(input, options)
  } else if (input.schedule.type === '5-2') {
    return fiveTwo(input, options)
  }
  return []
}
