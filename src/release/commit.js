'use strict'

const git = require('simple-git')(process.cwd())
const pify = require('pify')
const fs = require('fs-extra')

const getPathToPkg = require('../utils').getPathToPkg

const files = ['package.json', 'CHANGELOG.md']

async function commit () {
  await pify(git.add.bind(git))(files)

  const {
    version
  } = await fs.readJson(getPathToPkg())

  await pify(git.commit.bind(git))(
    `chore: release version v${version}`,
    files
  )
}

module.exports = commit
