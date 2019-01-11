const router = require('express').Router();
const mongoose = require('mongoose');
const model = require('../api/models/watches/watches-model');
const controller = require('../api/controllers/watches/watches-controller');
const connString = process.env.MONGODB || 'mongodb://127.0.0.1:27017/kenny';
mongoose.Promise = global.Promise;
mongoose.connect(connString, {useNewUrlParser: true});

router.get('/featured', controller.getFeatured);

module.exports = router;