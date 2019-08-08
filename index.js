const router = require('./server/router');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const app = express();

// App setup
//app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router(app);

// Server setup
//const server = http.createServer(app);
//server.listen(5000);
//console.log('Server listening on:', 5000);

/**
 * Start Server
 */
app.listen(5000, function () {
    console.log('App listening on port 5000!')
});
