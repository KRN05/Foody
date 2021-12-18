const express = require('express')
const authMiddleware = require('../middlewares/auth');
const ScheduleController = require('./app/controllers/ScheduleController');

const scheduleRouter = express.Router()

// Listing all the orders of the restaurant
scheduleRouter.get('/schedules/:restaurant_id', authMiddleware, ScheduleController.index);

export { scheduleRouter }