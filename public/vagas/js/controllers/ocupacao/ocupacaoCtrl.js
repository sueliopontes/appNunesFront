angular.module("app").controller("ocupacaoCtrl", function ($scope, ocupacaos,$location,ocupacaoAPI) {	
	$scope.ocupacaos = ocupacaos.data;		
	
	$scope.apagarOcupacao = function (id) {
		ocupacaoAPI.deleteOcupacao(id);				
	};

	$scope.isOcupacaosSelecionado = function (ocupacaos) {
		return ocupacaos.some(function (ocupacao) {
			return ocupacao.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});