const FileController = require('./app/controllers/FileController');
const AuthMiddleware = require('./app/middlewares/auth');
const multerUpload = require('./config/multer');

// Posting avatar to S3 Bucket
routes.post('/files/', multerUpload, FileController.store);

/* Starting to use the auth middleware */
routes.use(AuthMiddleware);

// Getting all the avatars and an specific avatar
routes.get('/files/', FileController.index);
routes.get('/files/:file_id', FileController.show);