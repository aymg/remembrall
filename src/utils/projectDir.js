'use strict';

const findParentDir = require('find-parent-dir').sync;

function findProjectDir() {
  let projectDir;

  projectDir = findParentDir(process.cwd(), '.git');

  if (!projectDir) {
   projectDir = findParentDir(path.join(__dirname, '..', '..'), '.git');
  }

  return projectDir;
}

module.exports = findProjectDir();