const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messagedLogged', function(a){
    // console.log('Listen called: '+ arg.url);
    console.log(a.id + " "+ a.url);
});

emitter.on('messagedLogged', (a) => {
    console.log(a.id + " "+ a.url);
});

emitter.emit('messagedLogged', {id: 1, url: 'http://'});