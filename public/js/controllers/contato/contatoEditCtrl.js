angular.module("app").controller("contatoEditCtrl", function (user_tipo,pessoaAPI, $timeout,$scope, $routeParams, pessoaId,contato,contatoAPI,$location) {
	$scope.contato = contato.data;
	$scope.pessoaId=pessoaId;
	$scope.user_tipo=user_tipo;
	$scope.msg="vazio";
	
	$scope.saveContato = function (contato) {		
		contatoAPI.updateContato(contato).success(function (data) {					
			//delete $scope.endereco;
			//$scope.contatoForm.$setPristine();			
			//$location.path("/contatoEdit/"+pessoaId);

			$scope.msg="Cadastro salvo com sucesso!!";			
			var tempo = $timeout(function() {
				$scope.msg="vazio";
			}, 1500); // delay 250 ms

		});
	};
	$scope.voltar = function () {		
		console.log(user_tipo);
		if(user_tipo=="1"){
			$location.path("/locatarioEdit/"+pessoaId);		
		}else{
			$location.path("/locadorEdit/"+pessoaId);		
		}
		
	};
});