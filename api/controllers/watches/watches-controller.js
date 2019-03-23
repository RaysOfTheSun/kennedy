const mongoose = require('mongoose');
const collection = mongoose.model('watches');

module.exports.getFeatured = (req, res) => {
    collection.find({featured: true}, 'name desc image size', (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.getNew = (req, res) => {
    collection.find({new: true, category: req.query.category}, 'name image size', (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.GetWatch = (req, res) => {
    collection.find({name: req.query.name}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.GetAll = (req, res) => {
    collection.find({}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.GetFiltered = (req, res) => {
    let sortDirection = {};
    let filters = {};

    if (req.query.sortDirection === 'asc' && req.query.sort) {
        sortDirection = {sort: req.query.sort && req.query.sort}
    } else if (req.query.sortDirection === 'desc' && req.query.sort) {
        sortDirection = {sort: `-${req.query.sort}`}
    } else {
        sortDirection = null;
    }

    if (req.query.category && req.query.group) {
        filters = {category: `${req.query.category}`, group: `${req.query.group}`}
    } else if (req.query.category && !req.query.group) {
        filters = {category: `${req.query.category}`};
    } else if (!req.query.category && req.query.group) {
        filters = {group: `${req.query.group}`};
    }

    collection.find(filters, null, sortDirection, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports.GetCollectionCount = (req, res) => {
    collection.find({}, (err, result) => {
        if (err) throw err;

        let groupCounts = {};
        let watchGroups = new Set(result.map(watch => watch.group));
        watchGroups.forEach(group => groupCounts[group] = 0);
        result.forEach(el => groupCounts[el.group] += 1);
        res.json(groupCounts);
    });
};

module.exports.GetCategoryCount = (req, res) => {
    collection.find({}, (err, result) => {
        if (err) throw err;

        let categoryCounts = {};
        const categorySet = new Set(result.map(el => el.category));
        categorySet.forEach(group => categoryCounts[group] = 0);
        result.forEach(watch => categoryCounts[watch.category] += 1);
        res.json(categoryCounts);
    });
};
