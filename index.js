// Copyright 2017 Andrew Schaaf, all rights reserved.
// This will probably be released under a permissive license before 2018.

const modules = [
  require('./src/misc'),
]

for (const m of modules) {
  for (var k in m) {
    module.exports[k] = m[k]
  }
}
