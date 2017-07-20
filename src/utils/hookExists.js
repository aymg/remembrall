'use strict';

const fs = require('fs');
const hookPath = require('./hookPath');

module.exports = function hookExists(projectDir, hook) {
  return fs.existsSync(hookPath(projectDir, hook));
}