angular.module("app").controller("rpCtrl", function ($scope, rps,$location,rpAPI,pessoaId) {	
	$scope.rps = rps.data;			
	$scope.pessoaId=pessoaId;
	
	$scope.apagarRp = function (id) {
		rpAPI.deleteRP(id);				
	};
	
});