const { Router } = require('express');

const multerUpload = require('./config/multer');

const UserController = require('./app/controllers/UserController');
const ProviderController = require('./app/controllers/ProviderController');
const SessionController = require('./app/controllers/SessionController');
const FileController = require('./app/controllers/FileController');
const AuthMiddleware = require('./app/middlewares/auth');

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/providers', ProviderController.store);
routes.post('/sessions', SessionController.store);

// Posting avatar to S3 Bucket
routes.post('/files/', multerUpload, FileController.store);

/* Starting to use the auth middleware */
routes.use(AuthMiddleware);

// Getting all the avatars and an specific avatar
routes.get('/files/', FileController.index);
routes.get('/files/:file_id', FileController.show);

// Updating user profile
routes.put('/users', UserController.update);

// Listing all the providers
routes.get('/providers', ProviderController.index);

module.exports = routes;
