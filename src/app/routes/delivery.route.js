const express = require('express')
const authMiddleware = require('../middlewares/auth');
const DeliveryController = require('./app/controllers/DeliveryController');

const deliveryRouter = express.Router()

// Creating, updating and delivering the order
deliveryRouter.post('/deliveries/:order_id', authMiddleware, DeliveryController.store);
deliveryRouter.put('/deliveries/:delivery_id', authMiddleware, DeliveryController.update);
deliveryRouter.delete('/deliveries/:delivery_id', authMiddleware, DeliveryController.delete);

export { deliveryRouter }