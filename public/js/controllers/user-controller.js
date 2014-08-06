/**
 * Created by harsha on 8/2/14.
 */
angular.module('userController', [])

    .controller('userController', function($scope, $location, Users, UserLocal){

           $scope.user = UserLocal;

           $scope.signup = function(){

               //check if email and password is entered
               if($scope.user.email == null || $scope.user.password == null){
                    alert("Enter the username and password");
                    return;
               }

               //check if the user already exists with same email
               //not checking asynchronously
               Users.getUser($scope.user.email)
                   .success(function(data) {
                        if (data.email == $scope.user.email) {
                            alert("User with the email already exists");
                            return;
                        }else{
                           //create new user
                           Users.create({email: $scope.user.email,
                               password: $scope.user.password,
                               university: $scope.user.university,
                               specialization: $scope.user.specialization})
                               .success(function (data) {
                                   $scope.user.loggedIn = true;
                                   alert("User with email "+$scope.user.email+" is created");
                                   $location.path('/');
                                   $scope.user.email = "";
                                   $scope.user.password = "";
                                   $scope.user.university = "";
                                   $scope.user.specialization = "";
                               });
                        }
                   });

           };

           $scope.signin = function(){
               Users.getUser($scope.user.email)
                    .success(function(data){
                        //check if the correct password is entered
                        if(data.password == $scope.user.password) {
                            alert("You are logged in");
                            $scope.user.loggedIn = true;
                            $location.path('/');
                        }
                        else
                            alert("Enter correct email and password");
                    })
                    .error(function(err){
                        alert("There is some error");
                    });
           }

    });