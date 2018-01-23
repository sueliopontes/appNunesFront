angular.module("app").controller("imoveisCtrl", function ($scope, imoveis,$location,imoveisAPI) {	
	$scope.imoveis = imoveis.data.data;		

	$scope.apagarImovel = function(id){	
		imoveisAPI.deleteImovel(id);		
		var lista=angular.copy($scope.imoveis);		
		$scope.imoveis=lista.filter(function(item){			
			if(item.id!==id){
				return item;
			}
		});		
	};		
	
});