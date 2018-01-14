angular.module("app").controller("painelCtrl", function ($scope, locadores,locatarios,$location) {	
	$scope.locadores = locadores.data.data;
	$scope.locatarios = locatarios.data.data;
	$scope.imoveis = {};
	
	$scope.pagamentos = {};//pagamentos.data.data;
	$scope.repasses = {};//repasses.data.data;
	$scope.contratos = {};//contratos.data.data;
	
});