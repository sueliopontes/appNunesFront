angular.module("app").controller("rcEditCtrl", function ($timeout,$scope, $routeParams,pessoaId, rc,rcAPI,$location) {
	$scope.rc = rc.data;
	$scope.pessoaId=pessoaId;
	$scope.msg="vazio";

	$scope.saveRC = function (rc) {		
		rcAPI.updateRC(rc).success(function (data) {
			//delete $scope.rc;
			//$scope.contatoForm.$setPristine();			
			//$location.path("/pessoaEdit/"+pessoaId);
			$scope.msg="Cadastro salvo com sucesso!!";			
			var tempo = $timeout(function() {
				$scope.msg="vazio";
			}, 1500); // delay 250 ms

			
		});
	};
});