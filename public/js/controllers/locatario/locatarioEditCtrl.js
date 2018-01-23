angular.module("app").controller("locatarioEditCtrl", function ($timeout,$scope, $routeParams, locatario,pessoaAPI,$location) {
	$scope.locatario = locatario.data;
	$scope.msg="vazio";

	$scope.saveLocatario = function (id,locatario) {		
		pessoaAPI.updatePessoa(id,locatario).success(function (data) {
			//delete $scope.locatario;
			//$scope.locatarioForm.$setPristine();
			//$location.path("/locatario");
			$scope.msg="Cadastro salvo com sucesso!!";			
			var tempo = $timeout(function() {
				$scope.msg="vazio";
			}, 1500); // delay 250 ms

			
		});
	};
});