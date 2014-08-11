/**
 * Created by harsha on 8/10/14.
 */
angular.module('companiesService', [])

    // super simple service
    // each function returns a promise object
    .factory('Companies', function($http) {
        return {
            get : function() {
                return $http.get('/api/companies');
            },
//            getUser : function(email) {
//                return $http.get('/api/user/'+ email);
//            },
            create : function(companyData) {
                return $http.post('/api/companies', companyData);
            }
        }
    });
