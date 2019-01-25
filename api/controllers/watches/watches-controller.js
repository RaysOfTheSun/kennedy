const mongoose = require('mongoose');
const collection = mongoose.model('watches');

module.exports.getFeatured = (req, res) => {
    collection.find({featured: true}, 'name desc image size', (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.getNew = (req, res) => {
    collection.find({new: true}, 'name image size', (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};