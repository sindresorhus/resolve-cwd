'use strict';
const resolveFrom = require('resolve-from');
const cwd = process.cwd()

module.exports = moduleId => resolveFrom(cwd, moduleId);
module.exports.silent = moduleId => resolveFrom.silent(cwd, moduleId);
