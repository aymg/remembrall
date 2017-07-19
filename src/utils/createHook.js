'use strict';

const fs = require('fs');
const p = require('./gitPath');

const { HOOK_BASE } = require('../config');

module.exports = function createHook(hook) {
  const hookPath = p(hook);

  fs.writeFileSync(hookPath, fs.readFileSync(HOOK_BASE, 'utf8'));
  fs.chmodSync(hookPath, parseInt('0755', 8));
}