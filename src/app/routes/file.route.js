const express = require('express')
const authMiddleware = require('../middlewares/auth');
const FileController = require('./app/controllers/FileController');
const multerUpload = require('./config/multer');

const fileRouter = express.Router()

fileRouter.post('/files/', multerUpload, FileController.store);
fileRouter.get('/files/', authMiddleware, FileController.index);
fileRouter.get('/files/:file_id', authMiddleware, FileController.show);

export { fileRouter }