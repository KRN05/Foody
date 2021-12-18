const express = require('express')
const authMiddleware = require('../middlewares/auth');
const FoodController = require('./app/controllers/FoodController');

const foodRouter = express.Router()

// Creating a food for the restaurant menu and listing all the menu of the restaurant
foodRouter.post('/foods/:restaurant_id', authMiddleware, FoodController.store);
foodRouter.get('/foods/:restaurant_id', authMiddleware, FoodController.index);

export { foodRouter }