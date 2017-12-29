angular.module("app").controller("contatoNewCtrl", function ($scope,contatoAPI,$location,pessoaId) {	
   
        $scope.pessoaId=pessoaId;
        
        $scope.adicionarContato = function (contato) {
            contato.user=pessoaId;		
            contatoAPI.saveContato(contato).success(function (data) {
               // delete $scope.contato;
                //$scope.contatoForm.$setPristine();
                //$location.path("/contato/"+locatarioId);
                $location.path("/conjugeNew/"+pessoaId);
            });
        };	
        
    });