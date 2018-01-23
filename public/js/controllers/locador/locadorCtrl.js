angular.module("app").controller("locadorCtrl", function ($scope, locadores,$location,pessoaAPI) {	
	$scope.locadores = locadores.data.data;			
	
	$scope.apagarLocador = function (id) {
		pessoaAPI.deletePessoa(id);	
		var lista=angular.copy($scope.locadores);		
		$scope.locadores=lista.filter(function(item){			
		if(item.id!==id){
			return item;
		}
	});			

	};
	
});
