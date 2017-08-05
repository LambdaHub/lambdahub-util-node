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
  it("returns a Promise", () => assertReturnsPromise(() => u.sleep(1)))
})

describe("readdir", () => {
  it("returns a Promise", () => assertReturnsPromise(() => u.readdir('foo')))
})

describe("stat", () => {
  it("returns a Promise", () => assertReturnsPromise(() => u.stat('foo')))
})

describe("exec", () => {
  it("returns a Promise", () => assertReturnsPromise(() => u.exec('date')))
})

describe("execFile", () => {
  it("returns a Promise", () => assertReturnsPromise(() => u.execFile('date')))
})

async function assertReturnsPromise(f) {
  const promise = f()
  assert.ok(promise instanceof Promise, 'expected a Promise')
  try {
    await promise
  } catch (e) {}
}
