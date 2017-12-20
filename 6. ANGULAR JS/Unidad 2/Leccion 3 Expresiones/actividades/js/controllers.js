'use strict';

/* Controllers */

var smartExpressionApp = angular.module('oneTimeAppController', []);

//Inyectamos la dependecia Temp que contiene nuestro convertidor de temperatura creada en services.js
smartExpressionApp.controller('SingleBindController', function( $scope) {

    var counter = 0;
    //Nuestra lista de vehiculos las fechas deben ser TimeStamp para que el programa funcione correctamente
    $scope.names = [
        {
            name: 'Dana'
        },
        {
            name: 'Wolfram'
        },
        {
            name: 'Estefany'
        },
        {
            name: 'You' 
        },
        {
            name: 'Jaraba'
        },
        {
            name: 'Miguel'
        },
        {
            name: 'Lucho'
        }
    ];

    //Se agrega la nueva expresion que sera validad en index.html por medio de $eval
    $scope.nextName = function(clickEvent) {
        $scope.name = $scope.names[counter % $scope.names.length].name;
        counter++;
    };
});
