/**
 * Created by harsha on 8/8/14.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Companies', {
    name : String,
    url : String,
    tags : [],
    createdBy : String
});