// Copyright 2017 Andrew Schaaf, all rights reserved.
// This will probably be released under a permissive license before 2018.

const assert = require('assert')
const u = require('../index')

describe("last", () => {
  it("returns the last element of a non-empty array", () => {
    assert.strictEqual(u.last([123, 'foo', 'bar']), 'bar')
  })

  it("returns undefined for an empty array", () => {
    assert.strictEqual(u.last([]), undefined)
  })
})

describe("sleep", () => {
  it("returns a Promise", () => {
    assert.ok(u.sleep(1) instanceof Promise)
  })
})
