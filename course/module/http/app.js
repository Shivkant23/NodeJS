// One of the powerful module of the Node

const http = require('http');
// const server = http.createServer();
// server.on('connection', (socket)=>{
//     console.log('New Connection:- '+socket);
// });

const server = http.createServer((req, res) => {

    console.log("URL:- "+req.url);

    if(req.url === "/"){
        res.write("Hello world!");
        res.end();
    }


    if(req.url === '/api/courses'){
        console.log("Passed");
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listning the port : 3000.');