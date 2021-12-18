const FoodController = require('./app/controllers/FoodController');


// Creating a food for the restaurant menu and listing all the menu of the restaurant
routes.post('/foods/:restaurant_id', FoodController.store);
routes.get('/foods/:restaurant_id', FoodController.index);