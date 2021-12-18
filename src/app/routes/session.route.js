const SessionController = require('./app/controllers/SessionController');

routes.post('/sessions', SessionController.store);
