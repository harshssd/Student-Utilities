/**
 * Created by harsha on 8/4/14.
 */
angular.module('companyController', [])

    .controller('companyController', function($scope, $location){

        $scope.saveCompany = function(){
            alert($scope.user.email);
            var company = {name:$scope.companyName, careers: $scope.companyLink, info: $scope.companyInfo};
            $scope.companies.push(company);
            $location.path('/companies');
            alert('Saved');
        };


    });
