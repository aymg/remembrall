'use strict';

const fs = require('fs');
const hookPath = require('./hookPath');
const { HOOK_BASE } = require('../config');

module.exports = function destroyHook(projectDir, hook) {
  const hookLocation = hookPath(projectDir, hook);

  fs.unlinkSync(hookLocation);
};