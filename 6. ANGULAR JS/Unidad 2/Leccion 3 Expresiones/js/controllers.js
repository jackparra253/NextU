'use strict';

var smartExpressionApp = angular.module("smartExpressionAppController", []);

smartExpressionApp.controller('SmartController',[ '$scope',function($scope){
	$scope.expression = "";

	$scope.expressions = [
		{
			value: '3*10 | currency'
		},
		{
			value: '1288323623006 | date:"yyyy/MMMM/dd"'
		},
		{
			value: '(8/2) * 16 +1'
		},
		{
			value: '12 * 2'
		},
		{
			value: '2500 * 1000 | currency'
		}
	];

	$scope.evaluate = function(){
		var exp = {
			value: $scope.expression
		};
		$scope.expressions.push(exp);
		$scope.expression = '';
	};

	$scope.deleteExp = function(idx){
		$scope.expressions.splice(idx,1);
	};

}]);