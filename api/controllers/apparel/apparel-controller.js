const mongoose = require('mongoose');
const collection = mongoose.model('apparel');

// one can actually do a query here and not have it error out
module.exports.GetAll = (req, res) => {
    collection.find({}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.GetFeatured = (req, res) => {
    if (!req.query.category) {
        collection.find({featured: true}, 'name image desc price', (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } else if (req.query.category) {
        collection.find({featured: true, category: req.query.category}, 'name image desc price', (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    }
};

module.exports.GetNew = (req, res) => {
    if (!req.query.category) {
        collection.find({new: true}, 'name image desc', (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } else if (req.query.category) {
        collection.find({new: true, category: req.query.category}, 'name image desc', (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    }
};