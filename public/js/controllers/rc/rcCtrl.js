angular.module("app").controller("rcCtrl", function ($scope, rcs,$location,rcAPI,locatarioId) {	
	$scope.rcs = rcs.data;			
	$scope.locatarioId=locatarioId;
	
	$scope.apagarRC = function (id) {
		rcAPI.deleteRC(id);				
	};

	$scope.isRCsSelecionado = function (rcs) {
		return rcs.some(function (rc) {
			return rc.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});