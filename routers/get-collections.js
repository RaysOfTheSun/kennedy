const router = require('express').Router();
const mongoose = require('mongoose');
const collectionsModel = require('../api/models/collections/collections-model');
const collectionsController = require('../api/controllers/collections/collections-controller');
const connString = 'mongodb://127.0.0.1:27017/kenny';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || connString, {useNewUrlParser: true});

// retrieve featured collections
router.get('/featured', collectionsController.getFeatured);

module.exports = router;