'use strict';

const hookExists = require('./utils/hookExists');
const createHook = require('./utils/createHook');
const hasRemembrall = require('./utils/hasRemembrall');
const takeRemembrall = require('./utils/takeRemembrall');
const { HOOK, HOOK_START, HOOK_END } = require('./config');

module.exports = function uninstall(projectDir) {
  try {
    if (!projectDir) {
      return console.log('Failed to find git repository. Aborting uninstall.');
    }

    if (!hookExists(projectDir, HOOK)) {
      console.log(`No ${HOOK} exists. Aborting.`)
      return;
    }

    if (hasRemembrall(projectDir, HOOK)) {
      takeRemembrall(projectDir, HOOK);
      console.log('Remembrall uninstalled.');
    }
  }
  catch(e) {
    console.log('Uninstall failed.', e);
  }
}