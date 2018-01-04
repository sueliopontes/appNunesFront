angular.module("app").controller("locadorCtrl", function ($scope, locadores,$location,pessoaAPI) {	
	$scope.locadores = locadores.data;			
	
	$scope.apagarLocador = function (id) {
		pessoaAPI.deletePessoa(id);				
	};
	
});