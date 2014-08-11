/**
 * Created by harsha on 8/1/14.
 */
var express = require('express');
var app  = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var database = require('./config/database'); 			// load the database config

// configuration ===============================================================
mongoose.connect(database.url);

//Changes in Express 3.x to 4.0
//http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0
//Removed Bundled Middleware, bodyParser, cookieParser, session, and others.
//They were removed into their own modules so that they could receive fixes,
//    updates, and releases without impacting the main express release cycles.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser()); 						// pull information from html in POST

require('./app/routes-users.js')(app);
require('./app/routes-companies.js')(app);

// application -------------------------------------------------------------
app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});