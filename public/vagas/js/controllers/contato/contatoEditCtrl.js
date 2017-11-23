angular.module("app").controller("contatoEditCtrl", function ($scope, $routeParams, contato,contatoAPI,$location) {
	$scope.contato = contato.data;
	$scope.saveContato = function (id,contato) {		
		contatoAPI.updateContato(id,contato).success(function (data) {					
			//$scope.contatoForm.$setPristine();				
			$location.path("/contato/"+$scope.contato.user);	
			delete $scope.contato;		
		});
	};
});