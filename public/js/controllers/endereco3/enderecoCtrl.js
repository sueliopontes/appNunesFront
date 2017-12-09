angular.module("app").controller("endereco3Ctrl", function ($scope, enderecos,$location,endereco3API,locatarioId) {	
	$scope.enderecos = enderecos.data;	
	$scope.locatarioId=locatarioId;
	
	$scope.apagarEndereco = function (id) {
		endereco3API.deleteEndereco(id);	
		$location.path("/endereco3/"+locatarioId);			
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