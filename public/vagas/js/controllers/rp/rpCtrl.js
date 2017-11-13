angular.module("app").controller("rpCtrl", function ($scope, rps,$location,rpAPI) {	
	$scope.rps = rps.data;		
	
	$scope.apagarRP = function (id) {
		rpAPI.deleteRP(id);				
	};

	$scope.isRPsSelecionado = function (rps) {
		return rps.some(function (rp) {
			return rp.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});