angular.module("app").controller("conjugeCtrl", function ($scope, conjuges,$location,conjugeAPI,pessoaId) {	
	$scope.conjuges = conjuges.data;		
	$scope.pessoaId=pessoaId;
	$scope.apagarConjuge = function (id) {
		conjugeAPI.deleteConjuge(id);				
	};
	
});