'use strict';

const projectDir = require('./utils/projectDir');
const hookExists = require('./utils/hookExists');
const createHook = require('./utils/createHook');
const hasRemembrall = require('./utils/hasRemembrall');
const takeRemembrall = require('./utils/takeRemembrall');
const { HOOK, HOOK_START, HOOK_END } = require('./config');

try {
  if (!projectDir) {
    return console.log('Failed to find git repository. Aborting uninstall.');
  }

  if (!hookExists(HOOK)) {
    console.log(`No ${HOOK} exists. Aborting.`)
    return;
  }

  if (hasRemembrall(HOOK)) {
    takeRemembrall(HOOK);
    console.log('Remembrall uninstalled.');
  }
}
catch(e) {
  console.log('Uninstall failed.', e);
}