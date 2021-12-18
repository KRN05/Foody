const express = require('express')
const authMiddleware = require('../middlewares/auth');
const RestaurantController = require('./app/controllers/RestaurantController');

const restaurantRouter = express.Router()

// Creating, listing and showing restaurants
restaurantRouter.post('/restaurants', authMiddleware, RestaurantController.store);
restaurantRouter.get('/restaurants', authMiddleware, RestaurantController.index);
restaurantRouter.get('/restaurants/:provider_id', authMiddleware, RestaurantController.index);

export { restaurantRouter }