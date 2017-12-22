angular.module("app").controller("locatarioCtrl", function ($scope, locatarios,$location,locatarioAPI) {	
	$scope.locatarios = locatarios.data;	
		
	
	$scope.apagarLocatario = function (locatario) {
		locatarioAPI.deleteLocatario(locatario.id);		
		/*
		$scope.locatarios= locatarios.filter(function (locatario) {
			if (!locatario.id==id) return locatario;
		});		
*/
		carregarDados();
		$location.path("/locatario");

		
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

	var carregarDados = function () {
		locatarioAPI.getLocatarios().success(function(data){
			console.log("oi");
			$scope.locatarios = locatarios.data;	
		});		
	};
	
});