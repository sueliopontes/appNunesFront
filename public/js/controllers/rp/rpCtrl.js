angular.module("app").controller("rpCtrl", function ($scope, rps,$location,rpAPI,pessoaId) {	
	$scope.rps = rps.data.data;			
	$scope.pessoaId=pessoaId;
	
	$scope.apagarRp = function (id) {
		rpAPI.deleteRP(id);	
		var lista=angular.copy($scope.rps);		
		$scope.rps=lista.filter(function(item){			
		if(item.id!==id){
			return item;
		}
	});			

	};
	
});
