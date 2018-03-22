'use strict';

/* App Module */
/* se crea el modulo del aplicativo
/* se inicializa nuestros controladores
/* se inicializan los services, para posteriormente inyectarlos a nuestros controladores  */
var cronoApp = angular.module('cronoApp', [
  'cronoAppControllers'
]).directive('ngClock', function() {
	return {
		restric: 'A', //restriccion de uso TIPO A : solo se puede llamar de la siguiente manera <div ng-clock></div>
		scope:{
			getTime: '='  // Definimos el Scope, es decir el parametro de entrada para nuestra directiva
		},
		template: '<div class="sparkline title clock-font">{{getTime}}</div>', //El template es lo que se ve al momento de invokar la directiva en el DOM
		controller:['$scope','$interval' , function($scope, $interval){ //El controlador le da funcionalidad a nuestra directiva, es decir la logica de nuestro reloj
			$interval(function () {
				//$interval es el equivalente a SetTimeOut, repite un trozo de codigo X veces por cada unidad de tiempo medida en milisegundos
				//en nuestro caso queremos que cada segundo llamemos a la clase Date y extraemos la hora, con la ayuda de moment.js
				var time = moment(new Date()).format("hh:mm:ss");
				$scope.getTime = time;
        	}, 1000);
		}]
	};
});

 