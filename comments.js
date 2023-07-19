// create web server using express
const express = require('express');
const app = express();

// import the body-parser
const bodyParser = require('body-parser');

// import the comments data
const comments = require('./data/comments');

// import the contacts data
const contacts = require('./data/contacts');
