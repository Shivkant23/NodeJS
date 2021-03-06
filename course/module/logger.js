
var url = "http://mylogger.io/log";

function log(message){
    //Send a http request.
    console.log(message);
}

log("This is the first error logs for the program.");

module.exports.logFunction = log;