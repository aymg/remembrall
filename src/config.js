'use strict';

const path = require('path');

const HOOK = 'prepare-commit-msg';
const HOOK_START = '########## REMEMBRALL:START ##########';
const HOOK_END = '########## REMEMBRALL:END ##########';
const HOOK_BASE = path.join(__dirname, '..', 'templates', 'base-hook');
const REMEMBRALL_TEMPLATE = path.join(__dirname, '..', 'templates', 'remembrall');

module.exports = { HOOK, HOOK_START, HOOK_END, HOOK_BASE, REMEMBRALL_TEMPLATE };