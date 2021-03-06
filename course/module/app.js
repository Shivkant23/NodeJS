var myLogModule = require('./Log.js');

myLogModule.info("This si info for incoming request.");
myLogModule.warning("This is warning message fro the funcatio you are using.");
myLogModule.error("This is the error message get from the function");
myLogModule.info(process.argv);
myLogModule.info(process.pid);
myLogModule.info(process.execPath);
myLogModule.info(process.cwd());
var obj = {
    authorName : 'Ryan Dahl',
    language: 'Node.js'
}

function display(x){
    console.log("This is X = "+x);
}

display(100);