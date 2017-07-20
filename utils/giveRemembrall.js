'use strict';

const fs = require('fs');
const p = require('./gitPath');
const { HOOK_START, HOOK_END, REMEMBRALL_TEMPLATE } = require('./config');

module.exports = function giveRemembrall(hook) {
  fs.appendFileSync(p(hook), `\n${HOOK_START}\n${fs.readFileSync(REMEMBRALL_TEMPLATE, 'utf8')}\n${HOOK_END}`);
}