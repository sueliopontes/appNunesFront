angular.module("app").controller("locatarioCtrl", function ($timeout,$scope, locatarios,$location,pessoaAPI,uppercaseFilter) {	
	$scope.locatarios = locatarios.data;

	$scope.apagarLocatario = function (id) {
		//pessoaAPI.deletePessoa(id);		
		carregarDados(id);
		//console.log($scope.locatarios);
		//$location.path("/locatario");		
		
	};	

	var carregarDados = function (id) {
		console.log(id);
		//$scope.contatos = contatos.filter(function (contato) {
		//	if (!contato.selecionado) return contato;
		//});
		var lista=$scope.locatarios;
		console.log(lista);
		var lista2= lista.filter(function (locatario) {
			if (!locatario.data.id==id) return locatario;
		});	
		console.log(lista2);
	//	var tempo = $timeout(function() {
			//$scope.locatarios=pessoaAPI.getLocatarios();
	//		console.log("oiii");
	//	}, 1500); // delay 250 ms
		
		
		
	};
/*
	var carregarDados = function () {
		pessoaAPI.getLocatarios().success(function(data){
			console.log(data.data);
			this.locatarios = data.data;	
		});	
		$scope.locatarios = null;	
	};
	*/
});