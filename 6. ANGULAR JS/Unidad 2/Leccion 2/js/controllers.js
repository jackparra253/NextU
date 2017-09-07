'use strict';

var carListApp = angular.module('carListAppController',[]);

carListApp.controller('ListController',['$scope',function($scope){
	$scope.appTitle = "CarList App 2014";
	$scope.formHeader = "Agregar un carro a la lista";
	$scope.deleteText = "Eliminar";
	$scope.addText = "Agregar";
	$scope.formTextBrand = "Marca";
	$scope.formTextYear = "Año";

	$scope.brand = "";
	$scope.year = "";

	$scope.cars = [
		{
			brand: "Honda",
			year: "2014"	
		},
		{
			brand: "Ford",
			year: "2017"
		},
		{
			brand: "Chevrolet",
			year: "2017"
		},
		{
			brand:"Mazda",
			year: "2017"
		}		
	];

	$scope.addCar = function(){
		var car = { 
			brand: $scope.brand,
			year : $scope.year
		};	
		$scope.cars.push(car);
	}

	$scope.deleteCar = function(idx){
		$scope.cars.splice(idx, 1);
	}
}]);