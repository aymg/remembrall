'use strict';

const fs = require('fs');
const p = require('./gitPath');
const { HOOK_START, HOOK_END, REMEMBRALL_TEMPLATE } = require('../config');

module.exports = function takeRemembrall(hook) {
  const currentContents = fs.readFileSync(p(hook), 'utf8');
  const beforeRemembrall = currentContents.substring(0, currentContents.indexOf(HOOK_START));
  const afterRemembrall = currentContents.substring(currentContents.indexOf(HOOK_END) + HOOK_END.length + 1);

  fs.writeFileSync(p(hook), `${beforeRemembrall}${afterRemembrall}`);
}