const ScheduleController = require('./app/controllers/ScheduleController');


// Listing all the orders of the restaurant
routes.get('/schedules/:restaurant_id', ScheduleController.index);