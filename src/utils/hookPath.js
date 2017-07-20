'use strict';

const path = require('path');

module.exports = function hookPath(projectDir, hook) {
  return path.join(projectDir, '.git', 'hooks', hook);
};