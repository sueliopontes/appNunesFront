angular.module("app").controller("contatoCtrl", function ($scope, contatos,$location,contatoAPI,locatarioId) {	
	$scope.contatos = contatos.data;		
	$scope.locatarioId=locatarioId;
	$scope.apagarContato = function (id) {
		contatoAPI.deleteContato(id);				
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