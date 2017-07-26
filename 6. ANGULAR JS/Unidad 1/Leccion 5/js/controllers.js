'use strict';
var carAppControllers = angular.module('carAppControllers',[]);

carAppControllers.controller('CarListCtrl',['$scope',function($scope, Car){
	$scope.cars = [{
		'name':'New qasqai',
		'snippet': 'Made you'
	},{
		'name':'Veloster',
		'snippet': 'Sporte like'
	},{
		'name':'Navarra',
		'snippet':'The navarra is'
	}];	
}]);