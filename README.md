# weight-program-schema

An open-source JSON schema for defining workout programs.
The idea is that a common standard would enable websites/blogs to define
workouts in a format that can be read by multiple workout apps.

# Usage
```
const schemas = require('weight-program-schema')
// The raw JSON schema definition:
console.log(schemas._schema)

// Several example definitions that follow the schema are provided:
console.log(schemas.stronglifts)
console.log(schemas.candito_squat)

```

# Schema File

The schema is located at [`lib/weight-program-schema.json`](lib/weight-program-schema.json)
and uses the standard [JSON Schema](http://json-schema.org).

# Schema Tests

`npm test`
