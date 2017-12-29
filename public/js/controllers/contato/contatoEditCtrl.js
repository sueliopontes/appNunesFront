angular.module("app").controller("contatoEditCtrl", function ($scope, $routeParams, pessoaId,contato,contatoAPI,$location) {
	$scope.contato = contato.data;
	$scope.pessoaId=pessoaId;
	
	$scope.saveContato = function (id,contato) {		
		contatoAPI.updateContato(id,contato).success(function (data) {					
			//delete $scope.endereco;
			//$scope.contatoForm.$setPristine();			
			$location.path("/contatoEdit/"+pessoaId);
		});
	};
});