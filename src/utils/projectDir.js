'use strict';

const findParentDir = require('find-parent-dir').sync;

function findProjectDir() {
  console.log('me');
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

module.exports = findProjectDir();