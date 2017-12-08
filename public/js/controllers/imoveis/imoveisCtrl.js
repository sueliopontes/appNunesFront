angular.module("app").controller("imoveisCtrl", function ($scope, imoveis,$location,imoveisAPI) {	
	$scope.imoveis = imoveis.data;	
		
	
	$scope.apagarImovel = function (id) {
		imoveisAPI.deleteImovel(id);				
	};

	$scope.isImoveisSelecionado = function (imoveis) {
		return imoveis.some(function (imoveis) {
			return imoveis.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});