const express = require('express');
const postRouter = express.Router();
const { getAllPosts } = require('../db');


// const postRouter = require('./users');
// postRouter.use('/users', postRouter);

// postRouter.use((req, res, next) => {
//     console.log("A request is being made to /users");
  
//     next(); 
//   });
  
  postRouter.get('/', async (req, res) => {
      const post = await getAllPosts();
    try {
        const response = {message: 'hello'}
        res.send(response);
    } catch (error) {
        console.error(error);
    }
      res.send({
        "posts": []
      });
    });
  

module.exports = postsRouter;