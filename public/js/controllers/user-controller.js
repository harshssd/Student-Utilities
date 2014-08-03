/**
 * Created by harsha on 8/2/14.
 */
angular.module('userController', [])

    .controller('userController', function($scope, $location){

        $scope.signin = function(){

//            email = $scope.userEmail;
//            password = $scope.userPassword;

            alert("Signed In");

//            $scope.userEmail = "";
//            $scope.userPassword = "";
            $location.path('/');


        };

    });