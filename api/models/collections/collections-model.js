const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionsSchema = new Schema({
    name: {
        type: Schema.Types.String
    },
    desc: {
        type: Schema.Types.String
    },
    image: {
        type: Schema.Types.String
    },
    featured: {
        type: Schema.Types.Boolean
    }
});

module.exports = mongoose.model('collections', collectionsSchema);