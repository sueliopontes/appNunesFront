angular.module("app").controller("bancoCtrl", function ($scope, bancos,$location,bancoAPI) {	
	$scope.bancos = bancos.data;		
	
	$scope.apagarBanco = function (id) {
		bancoAPI.deleteBanco(id);				
	};

	$scope.isBancosSelecionado = function (bancos) {
		return bancos.some(function (banco) {
			return banco.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});