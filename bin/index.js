#!/usr/bin/env node
'use strict';

const findParentDir = require('find-parent-dir').sync;
const install = require('../src/install');
const uninstall = require('../src/uninstall');
const projectDir = findParentDir(process.cwd(), '.git');
const argv = process.argv.slice(2).map((v) => v.toLowerCase());

if (argv[0] === 'install')
  return install(projectDir);

if (argv[0] === 'uninstall')
  return uninstall(projectDir);

console.log(`Usage: remembrall <install|uninstall>`);