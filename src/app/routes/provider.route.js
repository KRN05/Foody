const ProviderController = require('./app/controllers/ProviderController');

routes.get('/providers', ProviderController.index);
routes.post('/providers', ProviderController.store);
