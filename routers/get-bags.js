const router = require('express').Router();
const mongoose = require('mongoose');
const model = require('../api/models/bags/bags-model');
const controller = require('../api/controllers/bags/bags-controller');
const connString = 'mongodb://127.0.0.1:27017/kenny';
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || connString, {useNewUrlParser: true});

router.get('/', controller.GetAll);
router.get('/featured', controller.GetFeatured);
router.get('/new', controller.GetNew);

module.exports = router;