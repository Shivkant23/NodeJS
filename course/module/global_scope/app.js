//Global scope in code

console.log(); // this console is the global object


/// global fucntions which we can access anywhere
setTimeout(); // we use this to call the function after this timeout
clearTimeout(); // 
setInterval(); // used to call fuction after given delay.
clearInterval(); // used to stop that funtion calling repeatedly

console.log("sdksd");
// if we are calling this statement the JS Engiene will autometically convert it into
window.console.log(); 
// beacause thata where this console object is defined.
// similiarly all the uppper mention functions are belong to window.

// in node we dont have this window object instead we have global
global.setTimeout();

var message = ""; // this is not the global variable.
console.log(message); //""
console.log(global.message); // undefined