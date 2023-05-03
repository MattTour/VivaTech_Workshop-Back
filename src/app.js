const express = require('express');
var cors = require("cors");
var path = require('path');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

server.use(cors());

server.use(express.urlencoded());
server.use(express.json());

// const groupRoute = require("./api/routes/groupRoute");
// groupRoute(server);

server.listen(port, hostname);