/**
 * Created by harsha on 8/5/14.
 */
var Users = require('./models/user-schema');

module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all users
    app.get('/api/users', function(req, res) {

        // use mongoose to get all users in the database
        Users.find(function(err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(users); // return all users in JSON format
        });
    });

    // to get data of a single user
    app.get('/api/user/:email', function(req, res) {

        // use mongoose to get all users in the database
        return Users.findOne({email: req.params.email}, function(err, user) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.send(user); // return all users in JSON format
        });
    });

    // create user and send back all users after creation
    app.post('/api/users', function(req, res) {

        // create an user, information comes from AJAX request from Angular
        Users.create({
            email : req.body.email,
            password : req.body.password,
            university : req.body.university,
            specialization : req.body.specialization
        }, function(err, user) {
            if (err)
                res.send(err);

            // get and return all the users after you create another
            Users.find(function(err, users) {
                if (err)
                    res.send(err)
                res.json(users);
            });
        });

    });
//
//    // delete a todo
//    app.delete('/api/todos/:todo_id', function(req, res) {
//        Todo.remove({
//            _id : req.params.todo_id
//        }, function(err, todo) {
//            if (err)
//                res.send(err);
//
//            // get and return all the todos after you create another
//            Todo.find(function(err, todos) {
//                if (err)
//                    res.send(err)
//                res.json(todos);
//            });
//        });
//    });

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};