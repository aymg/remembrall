'use strict';

const fs = require('fs');
const p = require('./gitPath');

module.exports = function hookExists(hook) {
  return fs.existsSync(p(hook));
}