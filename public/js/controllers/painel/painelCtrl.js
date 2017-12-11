angular.module("app").controller("painelCtrl", function ($scope, locadors,locatarios,imoveis,$location) {	
	$scope.locadors = locadors.data.data;
	$scope.locatarios = locatarios.data.data;
	$scope.imoveis = imoveis.data.data;

	
	//$scope.pagamentos = pagamentos.data.data;
	//$scope.repasses = repasses.data.data;
	//$scope.contratos = contratos.data.data;

	

	
});