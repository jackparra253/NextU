var app = angular.module('app', ['ngAnimate']);

app.controller('controllerAnimacion', function($scope) {
    $scope.visible = true;
});

app.animation('.animacion', function() {
    return {
        enter: function(element, done) {
            element.text(' Hola como estas?');
            element.addClass('efectoAnimacion');
            done();
        },
        leave: function(element, done) {
            element.text('Hasta Luego!!');
            element.addClass('efectoAnimacion');
            done();
        }
    }
});
