# india-state-codes

A library to help you search, validate, and convert between India state names and state codes.

## Installation

```sh
npm install india-state-codes --save
```

## Usage

```javascript
var states = require('india-state-codes');

var stateCode = 'PB.';
var stateName = '(PunJAB) ';

assert(states.sanitizeStateCode(stateCode) === 'PB');
assert(states.sanitizeStateName(stateName) === 'Punjab');

assert(states.getStateNameByStateCode(stateCode) === 'Punjab');
assert(states.getStateCodeByStateName(stateName) === 'PB');
```
## Inspired from
https://github.com/mdzhang/us-state-codes