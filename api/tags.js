const express = require('express');
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require('../db');

  
  tagsRouter.get('/', async (req, res) => {
       
      try {
        const tags = await getAllTags();
        const response = {message: 'hello'}
        res.send(response);
    } catch (error) {
        console.error(error);
    }
      res.send({
        "tags": []
      });
    });   

    tagsRouter.get('/:tagName/posts', async (req, res, next) => {
      const { tagName } = req.params;
      const postsByTag = await getPostsByTagName(tagName);
       try {
        postsByTag.filter(post => {
          if(post.active === false && post.author.id !==  req.user.id){
            return false;
          }
        })
        res.send({ posts: postsByTag});

      } catch ({ name, message }) {
        next({ name, message });
      }
    });    

module.exports = tagsRouter;