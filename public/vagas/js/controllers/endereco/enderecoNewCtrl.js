angular.module("app").controller("enderecoNewCtrl", function ($scope,enderecoAPI,$location,locatarioId) {	
    
         $scope.locatarioId=locatarioId;
    
        $scope.adicionarEndereco = function (endereco) {
            endereco.user=locatarioId;			
            enderecoAPI.saveEndereco(endereco).success(function (data) {
                delete $scope.endereco;
                $scope.enderecoForm.$setPristine();
                $location.path("/endereco/"+locatarioId);
            });
        };	
        
    });