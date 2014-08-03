/**
 * Created by harsha on 8/2/14.
 */
angular.module("mainController", [])

    .controller("mainController", function($scope){

        $scope.companies = [
            {name: "Google", careers:"http://www.google.com/about/careers/", info:"world leader in software"},
            {name: "Google", careers:"http://www.google.com/about/careers/", info:"world leader in software"},
            {name: "Google", careers:"http://www.google.com/about/careers/", info:"world leader in software"}
        ];

    });