const EventEmitter = require('events');

var url = "http://logger.io/log";

class Exteding_Eventemitter extends EventEmitter {
    log(message){
        console.log(message);
    
        this.emit("messagedLogged", {id: 1, url: url})
    }
};

module.exports = Exteding_Eventemitter;