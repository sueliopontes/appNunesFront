angular.module("app").controller("contato2NewCtrl", function ($scope,contato2API,$location,locatarioId) {	
   
        $scope.locatarioId=locatarioId;
        
        $scope.adicionarContato = function (contato) {
            contato.user=locatarioId;		
            contato2API.saveContato(contato).success(function (data) {
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                $location.path("/contato2/"+locatarioId);
            });
        };	
        
    });