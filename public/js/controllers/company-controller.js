/**
 * Created by harsha on 8/4/14.
 */
angular.module('companyController', [])

    .controller('companyController', function($scope, $location, Companies){

        //populate with companies existing in db
        Companies.get()
            .success(function(companies){
                $scope.companies = companies;
            });

        $scope.saveCompany = function(){
            var tagsArray = $scope.companyTags.split(",");
            var company = {name:$scope.companyName, url: $scope.companyUrl, tags: tagsArray, createdBy: $scope.user.email};
            Companies.create(company)
                .success(function(data){
                    $scope.companies.push(company);
                });
            $location.path('/companies');
        };


    });
