require('dotenv').config();
JWT_SECRET="don't tell a soul"
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

apiRouter.use((error, req,res, next)=>{
  res.send(error);
});

apiRouter.use('*',(req, res, next)=>{
  res.status(404).send('oops! page cannot be reached :(');
});

server.listen(PORT || 3000, () => {
    console.log('The server is up on port', PORT)
  });
  



  // **********************************************************************************