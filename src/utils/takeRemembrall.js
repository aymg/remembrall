'use strict';

const fs = require('fs');
const hookPath = require('./hookPath');
const { HOOK_START, HOOK_END, REMEMBRALL_TEMPLATE } = require('../config');

module.exports = function takeRemembrall(projectDir, hook) {
  const hookLocation = hookPath(projectDir, hook);
  const currentContents = fs.readFileSync(hookLocation, 'utf8');
  const beforeRemembrall = currentContents.substring(0, currentContents.indexOf(HOOK_START));
  const afterRemembrall = currentContents.substring(currentContents.indexOf(HOOK_END) + HOOK_END.length + 1);

  fs.writeFileSync(hookLocation, `${beforeRemembrall}${afterRemembrall}`);
}