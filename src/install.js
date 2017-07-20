'use strict';

const hookExists = require('./utils/hookExists');
const createHook = require('./utils/createHook');
const hasRemembrall = require('./utils/hasRemembrall');
const giveRemembrall = require('./utils/giveRemembrall');
const { HOOK, HOOK_START, HOOK_END } = require('./config');

module.exports = function install(projectDir) {
  try {
    if (!projectDir) {
      return console.log('Failed to find git repository. Aborting install.');
    }

    if (!hookExists(projectDir, HOOK)) {
      createHook(projectDir, HOOK);
      console.log(`Creating ${HOOK}.`);
    }

    if (!hasRemembrall(projectDir, HOOK)) {
      giveRemembrall(projectDir, HOOK);
      console.log('Remembrall installed.');
    }
    else {
      console.log('Remembrall already installed. Aborting.');
    }
  }
  catch(e) {
    console.log('Install failed.', e);
  }
}