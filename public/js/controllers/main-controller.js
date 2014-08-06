/**
 * Created by harsha on 8/2/14.
 */
angular.module("mainController", [])

    .controller("mainController", function($scope, UserLocal){

        $scope.user = UserLocal;

        $scope.companies = [
            {name: "Google", careers:"http://www.google.com/about/careers/", info:"Search Engine, Android, Chrome"},
            {name: "Microsoft", careers:"http://www.microsoft.com/careers/", info:"Windows, Nokia, Office"},
            {name: "Amazon", careers:"http://www.amazon.com/careers/", info:"Cloud, Web Services, E-commerce "}
        ];

    });