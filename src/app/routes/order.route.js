const express = require('express')
const authMiddleware = require('../middlewares/auth');
const OrderController = require('./app/controllers/OrderController');

const orderRouter = express.Router()

// Creating, listing and cancelling orders
orderRouter.post('/orders', authMiddleware, OrderController.store);
orderRouter.get('/orders', authMiddleware, OrderController.index);
orderRouter.delete('/orders/:order_id', authMiddleware, OrderController.delete);

export { orderRouter }