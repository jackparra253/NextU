'use strict';

var carAppServices = angular.module('carAppServices', []);

carAppServices.factory('Car',[
	function(){
		return {
			notify:function(msg){
				alert(msg);
			},
			getCars:function(){
				var cars = [{
					"name": "NEW QASHQAI",
					"snippet":"MADE WITH YOU IN MIND TO GIVE YOU HIGHEST QUALITY"
				},
				{
					"name":"Veloster",
					"snippet":"SPORTY LIKE A COUPE. ROOMY LIKE A SEDAN",
				},{
					"name":"Navara",
					"snippet":"The Navara is all about freedom incluiding freedom of choice"
				}];
				return cars;
			}
		}
}]);