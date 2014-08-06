/**
 * Created by harsha on 8/5/14.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
    email : String,
    password : String,
    university: String,
    specialization:String
});