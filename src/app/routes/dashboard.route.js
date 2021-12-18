const DashboardController = require('./app/controllers/DashboardController')

routes.post('/dashboard/open/:restaurant_id', DashboardController.store);
routes.delete('/dashboard/close/:restaurant_id', DashboardController.delete);