'use strict';

const fs = require('fs');
const path = require('path');
const findParentDir = require('find-parent-dir').sync;
const projectDir = findProjectDir();
const remembrallTemplatePath = path.join(__dirname, '..', 'remembrall');
const baseHookPath = path.join(__dirname, '..', 'base-hook');
const COMMIT_MSG_HOOK = 'prepare-commit-msg';
const HOOK_START = '----------remembrall----------';
const HOOK_END = '----------remembrall----------';

if (!projectDir) {
  console.log('.git not found');
}

if (!hookExists(COMMIT_MSG_HOOK)) {
  fs.createFileSync(p(COMMIT_MSG_HOOK), fs.readFileSync(baseHookPath, 'utf8'));
  fs.chmodSync(p('test'), parseInt('0755', 8));
}

if (!isRemembrall(COMMIT_MSG_HOOK)) {
  makeRemembrall(COMMIT_MSG_HOOK);
}


function findProjectDir() {
  try { 
    return findParentDir(process.cwd(), '.git');
  } catch(err) {
    console.error('error', err);
    return null;
  }

  try { 
    return findParentDir(__dirname, '.git');
  } catch(err) {
    console.error('error', err);
    return null;
  }
}

function p() {
  const parts = Object.keys(arguments).map(key => arguments[key]);

  return path.join.apply(null, [projectDir, '.git', 'hooks'].concat(parts));
}

function hookExists(hook) {
  return fs.existsSync(p(hook));
}

function isRemembrall(hook) {
  return fs.readFileSync(p(hook), 'utf8').indexOf(HOOK_START) !== -1;
}

function makeRemembrall(hook) {
  fs.appendFileSync(p(hook), `${HOOK_START}\n${fs.readFileSync(remembrallTemplatePath, 'utf8')}\n${HOOK_END}`);
}