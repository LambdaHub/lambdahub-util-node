// Copyright 2017 Andrew Schaaf, all rights reserved.
// This will probably be released under a permissive license before 2018.

function last(arr) {
  return arr[arr.length - 1] // Note: `empty_arr[-1]` is `undefined`
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

module.exports = {
  last,
  sleep,
}
