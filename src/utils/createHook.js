'use strict';

const fs = require('fs');
const hookPath = require('./hookPath');
const { HOOK_BASE } = require('../config');

module.exports = function createHook(projectDir, hook) {
  const hookLocation = hookPath(projectDir, hook);

  fs.writeFileSync(hookLocation, fs.readFileSync(HOOK_BASE, 'utf8'));
  fs.chmodSync(hookLocation, parseInt('0755', 8));
};