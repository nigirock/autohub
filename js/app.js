var app = angular.module("APP",[]);
app.controller("mainCtrl",function($scope,$http){
    $http.get("data.json").success(function(data){
        $scope.cars = data.cars;
        $scope.carsModels = Object.keys(data.modelsCars[0]);

        console.log();
    });
});
