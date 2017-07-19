'use strict';

const projectDir = require('./utils/projectDir');
const hookExists = require('./utils/hookExists');
const createHook = require('./utils/createHook');
const hasRemembrall = require('./utils/hasRemembrall');
const takeRemembrall = require('./utils/takeRemembrall');
const { HOOK, HOOK_START, HOOK_END } = require('./config');

if (!projectDir) {
  return console.log('fatal: Not a git repository (or any of the parent directories): .git');
}

if (!hookExists(HOOK)) {
  return;
}

if (hasRemembrall(HOOK)) {
  takeRemembrall(HOOK);
}