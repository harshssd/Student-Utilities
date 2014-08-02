/**
 * Created by harsha on 8/1/14.
 */
var jobApplications = angular.module('jobApplications', ['ngRoute', 'controllers']);

jobApplications.config(function($routeProvider){
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
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        });

});

// create the controller and inject Angular's $scope
jobApplications.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $scope.companies = [
        {name: "Google", careers:"http://www.google.com/about/careers/", info:"world leader in software"},
        {name: "Google", careers:"http://www.google.com/about/careers/", info:"world leader in software"},
        {name: "Google", careers:"http://www.google.com/about/careers/", info:"world leader in software"}
    ];

});

jobApplications.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});