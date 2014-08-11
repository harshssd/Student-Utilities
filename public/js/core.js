/**
 * Created by harsha on 8/1/14.
 */
var utilities = angular.module('StudentUtilities', [
    'ngRoute',
    'mainController', 'userController', 'companyController',
    'userService', 'companiesService'
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
        .when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'userController'
        })
        .when('/signin', {
            templateUrl: 'partials/signin.html',
            controller: 'userController'
        });
});