const express = require('express')
const authMiddleware = require('../middlewares/auth');
const ProviderController = require('./app/controllers/ProviderController');

const providerRouter = express.Router()

providerRouter.post('/providers', authMiddleware, ProviderController.store);
providerRouter.get('/providers', ProviderController.index);

export { providerRouter }
