angular.module("app").controller("painelCtrl", function ($scope, locadores,locatarios,imoveis,$location) {	
	$scope.locadores = locadores.data.data;
	$scope.locatarios = locatarios.data.data;
	$scope.imoveis = imoveis.data.data;

	
	//$scope.pagamentos = pagamentos.data.data;
	//$scope.repasses = repasses.data.data;
	//$scope.contratos = contratos.data.data;

	

	
});