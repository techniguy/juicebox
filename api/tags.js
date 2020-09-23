const express = require('express');
const tagsRouter = express.Router();
const { getAlltags } = require('../db');


// const tagsRouter = require('./tags');
// tagsRouter.use('/tags', tagsRouter);

// tagsRouter.use((req, res, next) => {
//     console.log("A request is being made to /tags");
  
//     next(); 
//   });
  
  tagsRouter.get('/', async (req, res) => {
      const tags = await getAlltags();
      try {
        const response = {message: 'hello'}
        res.send(response);
    } catch (error) {
        console.error(error);
    }
      res.send({
        "tags": []
      });
    });
  

module.exports = tagsRouter;