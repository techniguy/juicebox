const express = require('express');
const usersRouter = express.Router();
const { getAllUsers } = require('../db');

// usersRouter.use((req, res, next) => {
//   console.log("A request is being made to /users");

//   next(); // THIS IS DIFFERENT
// });


usersRouter.get('/', async (req, res) => {
    const users = await getAllUsers();
    try {
        const response = {message: 'hello'}
        res.send(response);
    } catch (error) {
        console.error(error);
    }
    res.send({
      users
    });
  });

module.exports = usersRouter;

