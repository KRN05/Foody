const express = require('express')
const authMiddleware = require('../middlewares/auth');
const NotificationsController = require('./app/controllers/NotificationsController');

const notificationRouter = express.Router()

// Listing all the notifications of the restaurant and updating an specific notification
notificationRouter.get('/notifications', authMiddleware, NotificationsController.index);
notificationRouter.put('/notifications/:notification_id', authMiddleware, NotificationsController.update);

export { notificationRouter }