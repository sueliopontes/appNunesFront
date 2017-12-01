angular.module("app").controller("endereco2Ctrl", function ($scope, enderecos,$location,endereco2API,locatarioId) {	
	$scope.enderecos = enderecos.data;	
	$scope.locatarioId=locatarioId;
	
	$scope.apagarEndereco = function (id) {
		endereco2API.deleteEndereco(id);				
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