angular.module("app").controller("enderecoEditCtrl", function (user_tipo,$timeout,$scope, pessoaId, endereco, enderecoAPI,$location) {
	$scope.endereco = endereco.data;
	$scope.pessoaId=pessoaId;
	$scope.msg="vazio";

	$scope.saveEndereco = function (endereco) {		
		enderecoAPI.updateEndereco(endereco).success(function (data) {
			//delete $scope.endereco;
			//$scope.contatoForm.$setPristine();			
			//$location.path("/enderecoEdit/"+pessoaId);			
			$scope.msg="Cadastro salvo com sucesso!!";			
			var tempo = $timeout(function() {
				$scope.msg="vazio";
			}, 2500); // delay 250 ms

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