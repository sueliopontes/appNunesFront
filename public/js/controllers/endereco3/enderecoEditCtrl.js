angular.module("app").controller("endereco3EditCtrl", function ($scope, $routeParams, endereco,endereco3API,$location,imovelId) {
	$scope.endereco = endereco.data;
	$scope.saveEndereco = function (id,endereco) {		
		endereco3API.updateEndereco(id,endereco).success(function (data) {
			delete $scope.endereco;
			//$scope.contatoForm.$setPristine();			
			$location.path("/endereco3/"+imovelId);
			
			
		});
	};
});