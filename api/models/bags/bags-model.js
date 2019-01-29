const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BagsSchema = new Schema({
    name: {type: Schema.Types.String},
    image: {type: Schema.Types.String},
    desc: {type: Schema.Types.String},
    price: {type: Schema.Types.Number},
    featured: {type: Schema.Types.Boolean},
    group: {type: Schema.Types.String},
    new: {type: Schema.Types.Boolean}
});

module.exports = mongoose.model('bags', BagsSchema);