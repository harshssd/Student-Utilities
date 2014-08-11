/**
 * Created by harsha on 8/10/14.
 */
/**
 * Created by harsha on 8/5/14.
 */
var Companies = require('./models/companies-schema');

module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all users
    app.get('/api/companies', function(req, res) {

        // use mongoose to get all users in the database
        Companies.find(function(err, companies) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(companies); // return all users in JSON format
        });
    });

    // to get data of a single user
    app.get('/api/company/:name', function(req, res) {

        // use mongoose to get all users in the database
        return Companies.findOne({name: req.params.name}, function(err, company) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.send(company); // return all users in JSON format
        });
    });

    // create user and send back all users after creation
    app.post('/api/companies', function(req, res) {

        // create an user, information comes from AJAX request from Angular
        Companies.create({
            name : req.body.name,
            url : req.body.url,
            tags : req.body.tags,
            createdBy : req.body.createdBy
        }, function(err, company) {
            if (err)
                res.send(err);

            // get and return all the users after you create another
            Companies.find(function(err, companies) {
                if (err)
                    res.send(err)
                res.json(companies);
            });
        });

    });

};