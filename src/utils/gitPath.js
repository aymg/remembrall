'use strict';

const path = require('path');
const projectDir = require('./projectDir');

module.exports = function gitPath() {
  const parts = Object.keys(arguments).map(key => arguments[key]);

  return path.join.apply(null, [projectDir, '.git', 'hooks'].concat(parts));
};