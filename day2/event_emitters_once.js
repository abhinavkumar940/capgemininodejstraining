const CoreEventEmitterClass = require('events');

class MyEventEmitterClass extends CoreEventEmitterClass {

}

const EventEmitterObject = new MyEventEmitterClass;

let m = 0;

EventEmitterObject.once("event", () => {
    console.log(++m);
});

EventEmitterObject.emit('event');
// Prints: 1


EventEmitterObject.emit('event');
// Ignored