const express = require('express');
const apiRouter = express.Router();

const postsRouter = require('./users');
postsRouter.use('/users', postsRouter);

const tagsRouter = require('./tags');
tagsRouter.use('/tags', tagsRouter);

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

// ********************************************


module.exports = apiRouter;
