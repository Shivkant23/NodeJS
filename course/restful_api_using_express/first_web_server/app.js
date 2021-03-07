const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.send("This is empty respose.");
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});
