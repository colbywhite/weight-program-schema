# weight-program-schema

An open-source JSON schema for defining workout programs.
The idea is that a common standard would enable websites/blogs to define
workouts in a format that can be read by multiple workout apps.

# Usage
```
const WPS = require('weight-program-schema')
// The raw JSON schema definition:
console.log(WPS._schema)

// A method for calculating a day-by-day schedule based on a given program definition
console.log(WPS.schedule_calculator(program))
```

# Schema File

The schema is located at [`src/weight-program-schema.json`](src/weight-program-schema.json)
and uses the standard [JSON Schema](http://json-schema.org).

# Schema Tests

`npm test`
