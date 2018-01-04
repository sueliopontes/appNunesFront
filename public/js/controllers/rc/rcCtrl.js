angular.module("app").controller("rcCtrl", function ($scope, rcs,$location,rcAPI,pessoaId) {	
	$scope.rcs = rcs.data;			
	$scope.pessoaId=pessoaId;
	
	$scope.apagarRC = function (id) {
		rcAPI.deleteRC(id);				
	};
	
});