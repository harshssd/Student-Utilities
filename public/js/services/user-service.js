/**
 * Created by harsha on 8/5/14.
 */
angular.module('userService', [])

    // super simple service
    // each function returns a promise object
    .factory('Users', function($http) {
        return {
            get : function() {
                return $http.get('/api/users');
            },
            getUser : function(email) {
                return $http.get('/api/user/'+ email);
            },
            create : function(userData) {
                console.log(userData);
                return $http.post('/api/users', userData);
            }
//            delete : function(email) {
//                return $http.delete('/api/users/' + email);
//            }
        }
    })

    .factory('UserLocal', function(){
        return({loggedIn:false, email:""})
    });