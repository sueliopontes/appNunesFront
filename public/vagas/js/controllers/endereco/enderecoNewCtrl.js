angular.module("app").controller("enderecoNewCtrl", function ($scope,enderecoAPI,$location) {	
    
        $scope.adicionarEndereco = function (endereco) {		
            enderecoAPI.saveEndereco(endereco).success(function (data) {
                delete $scope.endereco;
                $scope.enderecoForm.$setPristine();
                $location.path("/endereco");
            });
        };	
        
    });