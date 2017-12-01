angular.module("app").controller("endereco2EditCtrl", function ($scope, $routeParams, endereco,endereco2API,$location) {
	$scope.endereco = endereco.data;
	$scope.saveEndereco = function (id,endereco) {		
		endereco2API.updateEndereco(id,endereco).success(function (data) {
			delete $scope.endereco;
			//$scope.contatoForm.$setPristine();			
			$location.path("/endereco2/"+endereco.user);
			
			
		});
	};
});