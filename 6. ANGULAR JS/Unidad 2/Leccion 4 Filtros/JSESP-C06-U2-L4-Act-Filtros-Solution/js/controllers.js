'use strict';

/* Controllers */

var carAppControllers = angular.module('carAppControllers', []);

//Inyectamos el servicio Car creaado en services JS, que nos permite extraer los vehiculos del proyecto
carAppControllers.controller('CarListCtrl', ['$scope', 'Car',
  	function($scope, Car) {
	/* Agregamos nuestros primeros carros <3 */
      $scope.cars = Car.getCars();
  }]);

