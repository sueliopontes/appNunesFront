angular.module("app").controller("contatoEditCtrl", function ($timeout,$scope, $routeParams, pessoaId,contato,contatoAPI,$location) {
	$scope.contato = contato.data;
	$scope.pessoaId=pessoaId;
	$scope.msg="vazio";
	
	$scope.saveContato = function (contato) {		
		contatoAPI.updateContato(contato).success(function (data) {					
			//delete $scope.endereco;
			//$scope.contatoForm.$setPristine();			
			//$location.path("/contatoEdit/"+pessoaId);

			$scope.msg="Cadastro salvo com sucesso!!";			
			var tempo = $timeout(function() {
				$scope.msg="vazio";
			}, 2500); // delay 250 ms

		});
	};
});