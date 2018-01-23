angular.module("app").controller("imoveisEditCtrl", function (locadores,$scope, $routeParams, imovel,imoveisAPI,$location) {
	$scope.imovel = imovel.data;
	$scope.locadores = locadores.data;	
	
	$scope.saveImovel = function (id,imovel) {		
		imoveisAPI.updateImovel(id,imovel).success(function (data) {
			delete $scope.imovel;
			$scope.imovelForm.$setPristine();
			$location.path("/imoveis");
			
		});
	};
});