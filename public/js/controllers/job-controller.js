/**
 * Created by harsha on 8/2/14.
 */
angular.module('controllers', [])

    .controller('jobController', function($scope, $location){

//        $scope.showForm = false;

//        $scope.addCompany = function(){
//            $scope.showForm = true;
//          alert('Added');
//        };

        $scope.saveCompany = function(){
//            $scope.showForm = false;
            var company = {name:$scope.companyName, careers: $scope.companyLink, info: $scope.companyInfo}
            $scope.companies.push(company);
            $location.path('/jobs');
            alert('Saved');
        };


    });