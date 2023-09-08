const http = require('http');
const express = require('express');

// Rutes
const createRouter = require('./routes/create');

const app = express();
app.use(express.json());

// Import create APIs
app.use('/patient', createRouter);

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);
