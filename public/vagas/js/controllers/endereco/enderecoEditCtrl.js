angular.module("app").controller("enderecoEditCtrl", function ($scope, $routeParams, endereco,enderecoAPI,$location) {
	$scope.endereco = endereco.data;
	$scope.saveEndereco = function (id,endereco) {		
		enderecoAPI.updateEndereco(id,endereco).success(function (data) {
			delete $scope.endereco;
			
			$location.path("/endereco/"+endereco.user);
			$scope.contatoForm.$setPristine();
			
		});
	};
});