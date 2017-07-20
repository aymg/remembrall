'use strict';

const projectDir = require('../utils/projectDir');
const hookExists = require('../utils/hookExists');
const createHook = require('../utils/createHook');
const hasRemembrall = require('../utils/hasRemembrall');
const giveRemembrall = require('../utils/giveRemembrall');
const { HOOK, HOOK_START, HOOK_END } = require('../utils/config');

try {
  if (!projectDir) {
    return console.log('Failed to find git repository. Aborting install.');
  }

  if (!hookExists(HOOK)) {
    createHook(HOOK);
  }

  if (!hasRemembrall(HOOK)) {
    giveRemembrall(HOOK);
    console.log('Remembrall installed.');
  }
  else {
    console.log('Remembrall already installed. Aborting.');
  }
}
catch(e) {
  console.log('Install failed.', e);
}