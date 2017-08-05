// Copyright 2017 Andrew Schaaf, all rights reserved.
// This will probably be released under a permissive license before 2018.

const fs = require('fs')
const child_process = require('child_process')
const util = require('util')

function last(arr) {
  return arr[arr.length - 1] // Note: `empty_arr[-1]` is `undefined`
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const readdir = util.promisify(fs.readdir)
const stat = util.promisify(fs.stat)

const exec = util.promisify(child_process.exec)
const execFile = util.promisify(child_process.execFile)

module.exports = {
  last,
  sleep,

  readdir,
  stat,

  exec,
  execFile,
}
