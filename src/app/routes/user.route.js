const express = require('express')
const authMiddleware = require('../middlewares/auth');
const UserController = require('./app/controllers/UserController');

const usersController = express.Router

usersController.post('/users', UserController.store);
usersController.put('/users', authMiddleware, UserController.update);

export {usersController}
