angular.module("app").controller("contato2Ctrl", function ($scope, contatos,$location,contato2API,locatarioId) {	
	$scope.contatos = contatos.data;		
	$scope.locatarioId=locatarioId;
	$scope.apagarContato = function (id) {
		contato2API.deleteContato(id);				
	};

	$scope.isContatosSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.data.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});