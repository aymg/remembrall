'use strict';

const fs = require('fs');
const hookPath = require('./hookPath');
const { HOOK_START, HOOK_END, REMEMBRALL_TEMPLATE } = require('../config');

module.exports = function giveRemembrall(projectDir, hook) {
  fs.appendFileSync(hookPath(projectDir, hook), `\n${HOOK_START}\n${fs.readFileSync(REMEMBRALL_TEMPLATE, 'utf8')}\n${HOOK_END}`);
};