const CoreEventEmitterClass = require('events');

class MyEventEmitterClass extends CoreEventEmitterClass {

}

const EventEmitterObject = new MyEventEmitterClass;


const NewEventEmitterObject = new MyEventEmitterClass;

EventEmitterObject.on("user_logged_in", function(username) {
    console.log(`${username} just logged in`);
});

NewEventEmitterObject.on("user_logged_in", function(username) {
    // DB connection here
    // then log user login to the DB
    console.log('Login logged to DB!');
})

EventEmitterObject.emit("user_logged_in", "johndoe");

NewEventEmitterObject.emit("user_logged_in", "johndoe");
