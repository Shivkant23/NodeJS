const EventEmitter = require('events');



const Exteding_Eventemitter = require('./exteding_eventemitter');
const logger = new Exteding_Eventemitter();

logger.on('messagedLogged', (arg) => {
    console.log("Listener called:- ", arg);
});

logger.log('this is my message');
// logger.emit('messageLogged', {id: 1, name: 'shivkant'});
