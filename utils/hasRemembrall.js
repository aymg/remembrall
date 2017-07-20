'use strict';

const fs = require('fs');
const p = require('./gitPath');
const { HOOK_START } = require('./config');

module.exports = function hasRemembrall(hook) {
  return fs.readFileSync(p(hook), 'utf8').indexOf(HOOK_START) !== -1;
}