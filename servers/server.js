const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users/');
const posts = require('./posts/');
const path = require('path');
const server = express();

server.use(bodyParser.json());

server.use("/api/users/", users);
server.use("/api/posts/", posts);

const distFolder = path.join(__dirname, '../ui/build');

server.use(express.static(distFolder));

server.listen(process.env.PORT || 9090);