const EventEmitter = require('events');

const emmitter = new EventEmitter();

//Register a listner.
emmitter.on('messagedLogged', function(){
    console.log("Listner is get called.");
})

//Raised an event here.
emmitter.emit('messagedLogged');
//Making a noise or producing something -signaling that event is occured.
