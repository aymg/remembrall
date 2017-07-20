'use strict';

const globalModules = require('global-modules');
const pathIsInside = require("path-is-inside");

module.exports = function isGlobal() {
  return pathIsInside(__dirname, globalModules);
};