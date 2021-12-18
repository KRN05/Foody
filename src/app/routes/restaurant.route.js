const RestaurantController = require('./app/controllers/RestaurantController');

// Creating, listing and showing restaurants
routes.post('/restaurants', RestaurantController.store);
routes.get('/restaurants', RestaurantController.index);
routes.get('/restaurants/:provider_id', RestaurantController.index);