angular.module("app").controller("enderecoEditCtrl", function ($scope, id, endereco,enderecoAPI,$location) {
	$scope.endereco = endereco.data;
	$scope.saveEndereco = function (endereco) {		
		enderecoAPI.updateEndereco(id,endereco).success(function (data) {
			delete $scope.endereco;
			$scope.contatoForm.$setPristine();			
			$location.path("/enderecoEdit/"+id);			
		});
	};
});