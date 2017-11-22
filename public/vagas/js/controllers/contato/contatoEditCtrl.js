angular.module("app").controller("contatoEditCtrl", function ($scope, $routeParams, contato,contatoAPI,$location) {
	$scope.contato = contato.data;
	$scope.saveContato = function (id,contato) {		
		contatoAPI.updateContato(id,contato).success(function (data) {
			delete $scope.contato;			
			$location.path("/contato/"+contato.user);
			$scope.contatoForm.$setPristine();
			
		});
	};
});