/**
 * Test case for hasVar.
 * Runs with mocha.
 */
'use strict'

const hasVar = require('../lib/has_var.js')
const assert = require('assert')
const co = require('co')

describe('has-var', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Has var', () => co(function * () {
    {
      let has = yield hasVar('it')
      assert.strictEqual(has, true)
    }
    {
      let has = yield hasVar('hogehoge')
      assert.strictEqual(has, false)
    }
  }))
})

/* global describe, before, after, it */
