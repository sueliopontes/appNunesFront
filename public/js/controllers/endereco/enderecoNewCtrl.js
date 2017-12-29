angular.module("app").controller("enderecoNewCtrl", function ($scope,enderecoAPI,$location,pessoaId) {	
    
         $scope.pessoaId=pessoaId;
    
        $scope.adicionarEndereco = function (endereco) {
            endereco.user=pessoaId;			
            enderecoAPI.saveEndereco(endereco).success(function (data) {
                //delete $scope.endereco;
                //$scope.enderecoForm.$setPristine();
                //$location.path("/endereco/"+locatarioId);
                $location.path("/contatoNew/"+pessoaId);
            });
        };	
        
    });