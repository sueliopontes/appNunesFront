angular.module("app").controller("locatarioCtrl", function ($scope, locatarios,$location,pessoaAPI) {	
	$scope.locatarios = locatarios.data;

	$scope.apagarLocatario = function (id) {
		pessoaAPI.deletePessoa(id);		
		/*
			$scope.locatarios= locatarios.filter(function (locatario) {
				if (!locatario.id==id) return locatario;
			});		
		*/
		carregarDados();
		//console.log($scope.locatarios);
		//$location.path("/locatario");		
	};	

	var carregarDados = function () {
		pessoaAPI.getLocatarios().success(function(data){
			console.log(data.data);
			this.locatarios = data.data;	
		});	
		$scope.locatarios = null;	
	};
	
});