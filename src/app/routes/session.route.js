const express = require('express')
const SessionController = require('./app/controllers/SessionController');

const sessionRouter = express.Router()

sessionRouter.post('/sessions', SessionController.store);

export { sessionRouter }