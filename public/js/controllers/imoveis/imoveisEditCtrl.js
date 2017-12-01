angular.module("app").controller("imoveisEditCtrl", function ($scope, $routeParams, imoveis,imoveisAPI,$location) {
	$scope.imoveis = imoveis.data;
	$scope.saveImoveis = function (id,imoveis) {		
		imoveisAPI.updateImoveis(id,imoveis).success(function (data) {
			delete $scope.imoveis;
			
			$location.path("/imoveis/"+imoveis.user);
			$scope.contatoForm.$setPristine();
			
		});
	};
});