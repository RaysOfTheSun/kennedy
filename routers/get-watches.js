const router = require('express').Router();
const mongoose = require('mongoose');
const model = require('../api/models/watches/watches-model');
const controller = require('../api/controllers/watches/watches-controller');
const connString = 'mongodb://127.0.0.1:27017/kenny';
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || connString, {useNewUrlParser: true});

router.get('/featured', controller.getFeatured);
router.get('/new', controller.getNew);

module.exports = router;