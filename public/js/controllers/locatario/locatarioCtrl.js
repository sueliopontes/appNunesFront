angular.module("app").controller("locatarioCtrl", function ($timeout,$scope, locatarios,$location,pessoaAPI,uppercaseFilter) {	
	$scope.locatarios = locatarios.data.data;

	$scope.apagarLocatario = function (id) {
		pessoaAPI.deletePessoa(id);		
		var lista=angular.copy($scope.locatarios);		
		$scope.locatarios=lista.filter(function(item){			
		if(item.id!==id){
			return item;
		}
	});			

	};
	
});
