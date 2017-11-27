angular.module("app").controller("locadorCtrl", function ($scope, locadors,$location,locadorAPI) {	
	$scope.locadors = locadors.data;	
		
	
	$scope.apagarlocador = function (id) {
		locadorAPI.deletelocador(id);				
	};

	$scope.islocadorsSelecionado = function (locadors) {
		return locadors.some(function (locador) {
			return locador.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});