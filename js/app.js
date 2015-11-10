var app = angular.module("APP",['ngAnimate']);
app.controller("mainCtrl",function($scope,$http){
    $http.get("data.json").success(function(data){
        $scope.cars = data.cars;
        $scope.carsModels = Object.keys(data.modelsCars[0]);
        $scope.menu = data.menu;
    });
});
