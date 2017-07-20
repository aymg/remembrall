'use strict';

const path = require('path');
const findParentDir = require('find-parent-dir').sync;
const isGlobal = require('../src/utils/isGlobal');
const install = require('../src/install');

if (isGlobal()) {
  return console.log('Installing remembrall CLI');
}

const projectDir = findParentDir(path.join(__dirname, '..', '..'), '.git');

install(projectDir);