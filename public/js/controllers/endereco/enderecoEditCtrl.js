angular.module("app").controller("enderecoEditCtrl", function ($scope, $routeParams, endereco,enderecoAPI,$location) {
	$scope.endereco = endereco.data;
	$scope.saveEndereco = function (id,endereco) {		
		enderecoAPI.updateEndereco(id,endereco).success(function (data) {
			delete $scope.endereco;
			//$scope.contatoForm.$setPristine();			
			$location.path("/endereco/"+endereco.user);
			
			
		});
	};
});