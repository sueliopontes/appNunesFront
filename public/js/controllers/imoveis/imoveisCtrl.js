angular.module("app").controller("imoveisCtrl", function ($scope, imoveis,$location,imoveisAPI) {	
	$scope.imoveis = imoveis.data;		
	
	$scope.apagarImovel = function (id) {
		imoveisAPI.deleteImovel(id);
		$location.path("/imoveis");				
	};

	
});