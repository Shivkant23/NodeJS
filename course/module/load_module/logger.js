function log(message){
    console.log(message);
}

module.exports.log = log;// exporting as a object.
module.exports = log; // exporting log as a function.