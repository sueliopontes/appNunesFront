angular.module("app").controller("rcCtrl", function ($scope, rcs,$location,rcAPI,pessoaId) {	
	$scope.rcs = rcs.data.data;			
	$scope.pessoaId=pessoaId;
	
	$scope.apagarRC = function (id) {
		rcAPI.deleteRC(id);	
		var lista=angular.copy($scope.rcs);		
		$scope.rcs=lista.filter(function(item){			
		if(item.id!==id){
			return item;
		}
	});			

	};
	
});
