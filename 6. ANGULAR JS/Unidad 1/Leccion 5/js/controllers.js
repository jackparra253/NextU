'use strict';
var carAppControllers = angular.module('carAppControllers',[]);

carAppControllers.controller('CarListCtrl',['$scope', 'Car',function($scope, Car){
	$scope.cars = Car.getCars();
	console.log($scope.cars);
	console.log(Car.getCars());
}]);