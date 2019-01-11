const mongoose = require('mongoose');
const MongooseSchema = mongoose.Schema;

const watchesSchema = new MongooseSchema({
    name: {
        type: MongooseSchema.Types.String
    },
    image: {
        type: MongooseSchema.Types.String
    },
    desc: {
        type: MongooseSchema.Types.String
    },
    size: {
        type: MongooseSchema.Types.Number
    },
    group: {
        type: MongooseSchema.Types.String
    },
    featured: {
        type: MongooseSchema.Types.Boolean
    }
});

module.exports = mongoose.model('watches', watchesSchema);