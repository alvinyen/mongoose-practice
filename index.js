const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const dbConnectionString = require('./config/config').dbConnectionString;

mongoose.connect(dbConnectionString);
const db = mongoose.connection;
db.on('error', (error) => { console.log('connection failed ', error); });
db.once('open', () => {
    console.log('connection successed');
});

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const server = http.createServer(app);
server.listen(3000, () => {
    console.log('server is running on port 3000');
});

