angular.module("app").controller("contratoCtrl", function ($scope, contratos,$location,contratoAPI,pessoaId) {	
	$scope.contratos = contratos.data;		
	$scope.pessoaId=pessoaId;
	
	$scope.apagarContrato = function (id) {
		contratoAPI.deleteContrato(id);				
	};	
	
});