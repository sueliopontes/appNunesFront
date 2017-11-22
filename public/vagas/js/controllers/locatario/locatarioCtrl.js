angular.module("app").controller("locatarioCtrl", function ($scope, locatarios,$location,locatarioAPI) {	
	$scope.locatarios = locatarios.data;	
		
	
	$scope.apagarLocatario = function (id) {
		locatarioAPI.deleteLocatario(id);				
	};

	$scope.isLocatariosSelecionado = function (locatarios) {
		return locatarios.some(function (locatario) {
			return locatario.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});