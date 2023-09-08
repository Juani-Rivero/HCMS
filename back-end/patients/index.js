const http = require('http');
const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Rutes
const createRouter = require('./routes/create');

const app = express();
app.use(express.json());

// Import create APIs
app.use('/patient', createRouter);

const server = http.createServer(app);
server.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}/patient`);
});
