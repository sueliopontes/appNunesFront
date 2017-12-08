angular.module("app").controller("imoveisCtrl", function ($scope, imoveiss,$location,imoveisAPI) {	
	$scope.imoveiss = imoveiss.data;	
		
	
	$scope.apagarimoveis = function (id) {
		imoveisAPI.deleteimoveis(id);				
	};

	$scope.isimoveissSelecionado = function (imoveiss) {
		return imoveiss.some(function (imoveis) {
			return imoveis.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});