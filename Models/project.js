var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
});

module.exports = mongoose.model('Project', ProjectSchema);
