angular.module("app").controller("contatoNewCtrl", function ($scope,contatoAPI,$location,locatarioId) {	
        $scope.contato.user=locatarioId;        
        $scope.locatarioId=locatarioId;
        
        $scope.adicionarContato = function (contato) {		
            contatoAPI.saveContato(contato).success(function (data) {
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                $location.path("/contato");
            });
        };	
        
    });