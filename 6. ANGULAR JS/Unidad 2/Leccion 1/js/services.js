'use strict';

var realTemApp = angular.module('realTempAppServices',[]);

realTemApp.factory('Temp',[function(temp){
	return{
		celciusToFahrenheit:function(temp){
			var tempInFahrenheit = 0.0;
			var temInCelcius = temp;

			tempInFahrenheit = temInCelcius * 9/5 * 32;
			return tempInFahrenheit;
		},
		celciusToKelvin: function(temp){
			var tempInKelvin = 0.0;
			var temInCelcius = temp;

			tempInKelvin = temInCelcius - 273.15;
			return tempInKelvin;
		}
	}
}]);