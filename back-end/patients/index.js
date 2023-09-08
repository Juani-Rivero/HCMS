const http = require('http');
const express = require('express');
const mongoose = require("mongoose");

// Establish Mongo connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://mongo/patient")
  .catch(error => console.log(error));

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Rutes
const patientRouter = require('./routes/patient');

const app = express();
app.use(express.json());

// Import create APIs
app.use('/patient', patientRouter);

const server = http.createServer(app);
server.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}/patient`);
});
