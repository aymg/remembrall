'use strict';

const path = require('path');
const findParentDir = require('find-parent-dir').sync;
const isGlobal = require('../src/utils/isGlobal');
const uninstall = require('../src/uninstall');

if (isGlobal()) {
  return console.log('Uninstalling remembrall CLI');
}

const projectDir = findParentDir(path.join(__dirname, '..', '..'), '.git');

uninstall(projectDir);