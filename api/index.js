// ********************************************
const express = require('express');
const apiRouter = express.Router();
const jwt = require('jsonwebtoken');
const { getUserById } = require('../db');
const { JWT_SECRET } = process.env; 

apiRouter.use(async(req, res, next) => {
    try {
        const auth = req.header('Authorization');
        if(!auth) {
            next();
        } else {
            const [, token] = auth.split(' ');
            console.log('auth',auth);

            const userObj = jwt.verify(token, JWT_SECRET);
            console.log('userObj',userObj);

            const user = await getUserById(userObj.id);
            console.log('user'.user);

            req.user=user;
            
            next();
        }
    } catch (error) {
      console.error();
    }
})


apiRouter.use((req, res, next) => {
    if (req.user) {
      console.log("User is set:", req.user);
    }
  
    next();
  });

apiRouter.use('/users',require('./users'));
apiRouter.use('/posts',require('./posts'));
apiRouter.use('/tags',require('./tags'));

module.exports = apiRouter;
