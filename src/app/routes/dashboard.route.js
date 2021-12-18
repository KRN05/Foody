const express = require('express')
const authMiddleware = require('../middlewares/auth');
const DashboardController = require('./app/controllers/DashboardController')

const dashBoardRouter = express.Router()

dashBoardRouter.post('/dashboard/open/:restaurant_id', authMiddleware, DashboardController.store);
dashBoardRouter.delete('/dashboard/close/:restaurant_id', authMiddleware, DashboardController.delete);

export { dashBoardRouter }