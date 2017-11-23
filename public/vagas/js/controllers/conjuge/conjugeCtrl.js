angular.module("app").controller("conjugeCtrl", function ($scope, conjuges,$location,conjugeAPI,locatarioId) {	
	$scope.conjuges = conjuges.data;		
	$scope.locatarioId=locatarioId;
	$scope.apagarConjuge = function (id) {
		conjugeAPI.deleteConjuge(id);				
	};

	$scope.isConjugesSelecionado = function (conjuges) {
		return conjuges.some(function (conjuge) {
			return conjuge.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});