const {
  EventEmitter,
  Factory,
  Event,
  List
} = require('../../index')

const emitter = new EventEmitter(new Factory(Event, List))

emitter.on("test", function() {
  console.log('test')
})

emitter.emit('test')