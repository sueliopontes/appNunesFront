angular.module("app").controller("enderecoCtrl", function ($scope, enderecos,$location,enderecoAPI) {	
	$scope.enderecos = enderecos.data;		
	
	$scope.apagarEndereco = function (id) {
		enderecoAPI.deleteEndereco(id);				
	};

	$scope.isEnderecosSelecionado = function (enderecos) {
		return enderecos.some(function (endereco) {
			return endereco.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});