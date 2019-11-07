const express = require('express');
// const multer = require('multer');
// const uploadConfig = require('./config/upload');

const UserSessionController = require('./controllers/UserSessionController');


const routes = express.Router();
// const upload = multer(uploadConfig);

// Sessions
routes.post('/sessions', UserSessionController.store);


module.exports = routes;