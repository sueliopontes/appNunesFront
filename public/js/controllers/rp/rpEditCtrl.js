angular.module("app").controller("rpEditCtrl", function ($timeout,$scope, $routeParams,pessoaId, rp,rpAPI,$location) {
	$scope.rp = rp.data;
	$scope.pessoaId=pessoaId;
	$scope.msg="vazio";
	
	$scope.saveRP = function (rp) {		
		rpAPI.updateRP(rp).success(function (data) {
			//delete $scope.rp;
			//$scope.contatoForm.$setPristine();			
			//$location.path("/pessoaEdit/"+pessoaId);			
			$scope.msg="Cadastro salvo com sucesso!!";			
			var tempo = $timeout(function() {
				$scope.msg="vazio";
			}, 2500); // delay 250 ms

		});
	};
});