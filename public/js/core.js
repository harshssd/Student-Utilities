/**
 * Created by harsha on 8/1/14.
 */
var utilities = angular.module('jobApplications', [
    'ngRoute',
    'mainController', 'jobController', 'userController'
]);

utilities.config(function($routeProvider){
    $routeProvider

        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'mainController'
        })
        .when('/jobs', {
            templateUrl: 'partials/job.html',
            controller: 'jobController'
        })
        .when('/add-company', {
            templateUrl: 'partials/add-company.html',
            controller: 'jobController'
        })
        .when('/signin', {
            templateUrl: 'partials/signin.html',
            controller: 'userController'
        });
//        .when('/about', {
//            templateUrl: 'partials/about.html',
//            controller: 'aboutController'
//        });

});

//// create the controller and inject Angular's $scope
//utilities.controller('mainController', function($scope) {
//
//    $scope.companies = [
//        {name: "Google", careers:"http://www.google.com/about/careers/", info:"world leader in software"},
//        {name: "Google", careers:"http://www.google.com/about/careers/", info:"world leader in software"},
//        {name: "Google", careers:"http://www.google.com/about/careers/", info:"world leader in software"}
//    ];
//
//});
//
//utilities.controller('aboutController', function($scope) {
////    $scope.message = 'Look! I am an about page.';
//});