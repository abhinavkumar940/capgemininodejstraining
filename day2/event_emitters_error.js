const CoreEventEmitterClass = require('events');

class MyEventEmitterClass extends CoreEventEmitterClass {

}

const EventEmitterObject = new MyEventEmitterClass;

// Throws an error and the execution stops
EventEmitterObject.emit("error", new Error("Whoops!"));

EventEmitterObject.on("error", (err) => {
    console.log("Whoops! there was an error!");
});

// Prints "Whoops! there was en error and execution still continues"
EventEmitterObject.emit("error", new Error("whoops!"));

console.log("this is normal line");