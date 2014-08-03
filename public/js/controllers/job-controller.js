/**
 * Created by harsha on 8/2/14.
 */
angular.module('jobController', [])

    .controller('jobController', function($scope, $location){

        $scope.saveCompany = function(){
            var company = {name:$scope.companyName, careers: $scope.companyLink, info: $scope.companyInfo};
            $scope.companies.push(company);
            $location.path('/jobs');
            alert('Saved');
        };


    });

//.controller('userController', function($scope, $location){
//
//    $scope.signin = function(){
//
////            email = $scope.userEmail;
////            password = $scope.userPassword;
//
//        alert("Signed In");
//
////            $scope.userEmail = "";
////            $scope.userPassword = "";
//        $location.path('/');
//
//
//    };
//
//});