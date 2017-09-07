'use strict';

var realTempAppControllers = angular.module('realTempAppControllers',[]);

realTempAppControllers.controller('TempController',['$scope', 'Temp',function($scope, Temp){

	$scope.tempInCelcius = 0.0;
	$scope.resultInFahrenheit = 0.0;
	$scope.resultInKelvins = 0.0;

	$scope.convertTemperatures = function(){
		$scope.resultInFahrenheit = Temp.celciusToFahrenheit($scope.tempInCelcius);
		$scope.resultInKelvins = Temp.celciusToKelvin($scope.tempInCelcius);
	}

}]);