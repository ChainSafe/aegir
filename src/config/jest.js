'use strict'

const path = require('path')

module.exports = {
  testMatch: [
    '**/test/**/*.js'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src/'
  ],
  setupTestFrameworkScriptFile: path.join(__dirname, 'jest-setup.js'),
  rootDir: process.cwd(),
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/node_modules/**',
    '!**/test/**',
    '!**/dist/**'
  ],
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage'
}