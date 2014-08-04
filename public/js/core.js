/**
 * Created by harsha on 8/1/14.
 */
var utilities = angular.module('jobApplications', [
    'ngRoute',
    'mainController', 'userController', 'companyController'
]);

utilities.config(function($routeProvider){

    $routeProvider

        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'mainController'
        })
//        .when('/applications', {
//            templateUrl: 'partials/job.html',
//            controller: 'jobController'
//        })
        .when('/add-company', {
            templateUrl: 'partials/add-company.html',
            controller: 'companyController'
        })
        .when('/schedule', {
            templateUrl: 'partials/schedule.html',
            controller: 'mainController'
        })
        .when('/companies', {
            templateUrl: 'partials/companies.html',
            controller: 'companyController'
        })
        .when('/signin', {
            templateUrl: 'partials/signin.html',
            controller: 'userController'
        });
});