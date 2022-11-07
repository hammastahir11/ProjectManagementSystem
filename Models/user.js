var mongoose = require('mongoose');
// using passport-local-mongoose to hash and salt password
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username: String, 
    email: String,
    password: String,

    admin: {
        type: Boolean,
        default: false
    }
});

UserSchema.plugin(passportLocalMongoose, {usernameCaseInsensitive: true});

module.exports = mongoose.model('User', UserSchema);
 