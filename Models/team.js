var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },

    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }]
});

module.exports = mongoose.model('Team', TeamSchema);
