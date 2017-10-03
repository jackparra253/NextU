'use strict';

var smartExpressionApp = angular.module('oneTimeAppController', []);

smartExpressionApp.controller('SingleBindController', ['$scope', function($scope) {
    var counter = 0;

    $scope.names = [{
            name: 'Jack'
        },
        {
            name: 'Luis'
        },
        {
            name: 'Luisa'
        },
        {
            name: 'Arnod'
        },
        {
            name: 'Alvaro'
        },
        {
            name: 'Edwin'
        }
    ];

    $scope.name = "";

    $scope.nextName = function(clickEvent) {
        $scope.name = $scope.names[counter % $scope.names.length].name;
        counter++;
        console.log($scope.name);
    }
}]);