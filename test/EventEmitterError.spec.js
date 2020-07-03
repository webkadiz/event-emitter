const { assert } = require("chai")
const EventEmitterError = require('../src/EventEmitterError')

describe("EventEmitterError", function() {
  it("Instance of", function() {
    const eventEmitterError = new EventEmitterError()
    assert.instanceOf(eventEmitterError, EventEmitterError)
  })

  it("Name error ", function() {
    const eventEmitterError = new EventEmitterError()
    assert.equal(eventEmitterError.name, "EventEmitterError")
  })

  it("Message right ", function() {
    const eventEmitterError = new EventEmitterError("emit wrong")
    assert.equal(eventEmitterError.message, "emit wrong")
  })
})