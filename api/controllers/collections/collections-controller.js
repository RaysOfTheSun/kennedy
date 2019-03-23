const mongoose = require('mongoose');
const collection = mongoose.model('collections');

exports.getFeatured = (req, res) => {
    collection.find({'featured': true}, 'name desc image', (err, result) => {
        if (err) {
            throw  err;
        }
        res.send(result);
    });
};
