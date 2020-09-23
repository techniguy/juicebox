const { PORT = 3000 } = process.env;
const express = require('express');
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const apiRouter = require('./api');
const { client } = require('./db');
client.connect();
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use('/api', apiRouter);







// **********************************************************************************

// const { PORT = 3000 } = process.env;
// server.listen(PORT, function() {
//   console.log('The server is up on port,http://localhost:${PORT}')
// });

server.listen(PORT || 3000, () => {
    console.log('The server is up on port', PORT)
  });
  



  // **********************************************************************************