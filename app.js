/**
 * Created by harsha on 8/1/14.
 */
var express = require('express');
var app  = express();
var mongoose = require('mongoose');

//app.use(express.static(__dirname + '/public'));
//app.configure(function(){
    app.use(express.static(__dirname + '/public'));
//    app.use(express.bodyParser());
//    app.use(app.router);
//});

// application -------------------------------------------------------------
app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});