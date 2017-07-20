'use strict';

const fs = require('fs');
const hookPath = require('./hookPath');
const { HOOK_START } = require('../config');

module.exports = function hasRemembrall(projectDir, hook) {
  return fs.readFileSync(hookPath(projectDir, hook), 'utf8').indexOf(HOOK_START) !== -1;
};