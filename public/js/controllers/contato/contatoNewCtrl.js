angular.module("app").controller("contatoNewCtrl", function ($scope,contatoAPI,$location,locatarioId) {	
   
        $scope.locatarioId=locatarioId;
        
        $scope.adicionarContato = function (contato) {
            contato.user=locatarioId;		
            contatoAPI.saveContato(contato).success(function (data) {
               // delete $scope.contato;
                //$scope.contatoForm.$setPristine();
                //$location.path("/contato/"+locatarioId);
                $location.path("/conjugeNew/"+locatarioId);
            });
        };	
        
    });