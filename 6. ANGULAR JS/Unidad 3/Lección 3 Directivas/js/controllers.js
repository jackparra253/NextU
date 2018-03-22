'use strict';

/* Controllers */

var cronoApp = angular.module('cronoAppControllers', []);

cronoApp.controller('clockController', function( $scope) {
	$scope.time = moment(new Date()).format("hh:mm:ss"); // valor inicial de nuestro reloj sera la fecha actual

    $scope.getTimeEnlapse = function(){ // cada vez que se oprima el boton  GET TIME, usaremos fronzenTime para almacenar la hora que estaba corriendo
    	$scope.fronzenTime = $scope.time;
    }
});
