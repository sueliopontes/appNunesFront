angular.module("app").controller("imoveisCtrl", function ($scope, imoveiss,$location,imoveisAPI,locatarioId) {	
	$scope.imoveiss = imoveiss.data;		
	$scope.locatarioId=locatarioId;
	
	$scope.apagarImoveis = function (id) {
		imoveisAPI.deleteImoveis(id);				
	};

	$scope.isImoveissSelecionado = function (imoveiss) {
		return imoveiss.some(function (imoveis) {
			return imoveis.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});