#!/usr/bin/env node
'use strict';

const argv = process.argv.slice(2).map((v) => v.toLowerCase());

if (argv[0] === 'install' || argv[0] === 'uninstall')
  return require(`./${argv[0]}`);

console.log(`Usage: remembrall <install|uninstall>`);