angular.module("app").controller("enderecoEditCtrl", function ($scope, pessoaId, endereco,enderecoAPI,$location) {
	$scope.endereco = endereco.data;
	$scope.pessoaId=pessoaId;

	$scope.saveEndereco = function (endereco) {		
		enderecoAPI.updateEndereco(pessoaId,endereco).success(function (data) {
			//delete $scope.endereco;
			//$scope.contatoForm.$setPristine();			
			$location.path("/enderecoEdit/"+pessoaId);			
		});
	};
});