const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApparelSchema = new Schema({
    name: {type: Schema.Types.String},
    image: {type: Schema.Types.String},
    imageActual: {type: Schema.Types.String},
    desc: {type: Schema.Types.String},
    price: {type: Schema.Types.Number},
    category: {type: Schema.Types.String},
    group: {type: Schema.Types.String},
    featured: {type: Schema.Types.Boolean},
    new: {type: Schema.Types.Boolean}
});

module.exports = mongoose.model('apparel', ApparelSchema, 'apparel');