var app = angular.module("APP",[]);
app.controller("mainCtrl",function($scope,$http){
    $http.get("data.json").success(function(data){
        $scope.cars = data.cars;
        console.log($scope.page);
    });
});
