angular.module("app").controller("imoveisEditCtrl", function ($scope, $routeParams, imoveis,imoveisAPI,$location) {
	$scope.imoveis = imoveis.data;
	$scope.saveimoveis = function (id,imoveis) {		
		imoveisAPI.updateimoveis(id,imoveis).success(function (data) {
			delete $scope.imoveis;
			$scope.imoveisForm.$setPristine();
			$location.path("/imoveis");
			
		});
	};
});