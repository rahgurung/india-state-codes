# india-state-codes

[![version](https://img.shields.io/npm/v/india-state-codes)](https://npmjs.org/package/india-state-codes)

A library to help you search, validate, and convert between India state names and state codes.

## Installation

```sh
npm install india-state-codes --save
```

## Usage

```javascript
var states = require('india-state-codes');

states.sanitizeStateCode('PB.')  // PB
states.sanitizeStateName('(PunJAB) ')  // Punjab
states.getStateNameByStateCode('...MH.=') // Maharashtra
states.getStateCodeByStateName('!D#!%e123132lhi') // DL (Delhi)
```
## Inspired from
https://github.com/mdzhang/us-state-codes