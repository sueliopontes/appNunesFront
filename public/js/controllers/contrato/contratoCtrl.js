angular.module("app").controller("contratoCtrl", function ($scope, contratos,$location,contratoAPI,locatarioId) {	
	$scope.contratos = contratos.data;		
	$scope.locatarioId=locatarioId;
	
	$scope.apagarContrato = function (id) {
		contratoAPI.deleteContrato(id);				
	};

	$scope.isContratosSelecionado = function (contratos) {
		return contratos.some(function (contrato) {
			return contrato.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});