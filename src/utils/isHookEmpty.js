'use strict';

const fs = require('fs');
const hookPath = require('./hookPath');
const { HOOK_BASE } = require('../config');

module.exports = function isHookEmpty(projectDir, hook) {
  const hookLocation = hookPath(projectDir, hook);

  return fs.readFileSync(hookLocation, 'utf8').trim() === fs.readFileSync(HOOK_BASE, 'utf8').trim();
};