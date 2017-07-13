import calc from './schedule_calculator'
import * as schema from './weight-program-schema.json'

export let schedule_calculator = calc
export let _schema = schema

export interface Load {
  type: string
  increment: number
  from: string
}

export interface Exercise {
  name: string
  sets: number
  reps: number
  load: Load
}

export interface Program {
  name: string
  source: string
  unit: string
  workouts: {[key: string]: {exercises: Exercise[]}}
  schedule: {type: string, order: string[], duration: string}
}
