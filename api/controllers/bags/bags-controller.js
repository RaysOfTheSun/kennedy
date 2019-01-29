const mongoose = require('mongoose');
const collection = mongoose.model('bags');

module.exports.GetAll = (req, res) => {
    collection.find({}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.GetFeatured = (req, res) => {
    collection.find({featured: true}, "name image desc", (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.GetNew = (req, res) => {
  collection.find({new: true}, 'name image desc', (err, result) => {
     if (err) throw err;
     res.send(result);
  });
};