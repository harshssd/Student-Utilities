/**
 * Created by harsha on 8/2/14.
 */
angular.module("mainController", [])

    .controller("mainController", function($scope, UserLocal, Users){

        //user details through a shared service
        $scope.user = UserLocal;


        //fetch userdetail from session storage
        if(sessionStorage.email){
//            $scope.user.email = sessionStorage.email;
            Users.getUser(sessionStorage.email)
                .success(function(user){
                    $scope.user = user;
                    if($scope.user.email == sessionStorage.email)
                        $scope.user.loggedIn = true;
//                    alert(sessionStorage.email + " "+$scope.user.loggedIn);
                });
        };

//        //clear user details on signout
        $scope.signout = function(){
            sessionStorage.email = undefined;
            $scope.user.loggedIn = false;
        };

    });