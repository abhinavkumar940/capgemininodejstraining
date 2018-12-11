const CoreEventEmitterClass = require('events');

class MyEventEmitterClass extends CoreEventEmitterClass {

}

const EventEmitterObject = new MyEventEmitterClass;

EventEmitterObject.on("event", (arg1, arg2) => {
    setImmediate((arg1, arg2) => {
        console.log("Event got called!");
        console.log(arg1, arg2, this);
    }, arg1, arg2);
});

EventEmitterObject.emit("event", "val1", "val2");