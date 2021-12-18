const UserController = require('./app/controllers/UserController');

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
