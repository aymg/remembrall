'use strict';

const hookExists = require('./utils/hookExists');
const hasRemembrall = require('./utils/hasRemembrall');
const takeRemembrall = require('./utils/takeRemembrall');
const isHookEmpty = require('./utils/isHookEmpty');
const destroyHook = require('./utils/destroyHook');
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

    if (isHookEmpty(projectDir, HOOK)) {
      destroyHook(projectDir, HOOK);
      console.log(`Removed ${HOOK}.`);
    }
  }
  catch(e) {
    console.log('Uninstall failed.', e);
  }
}