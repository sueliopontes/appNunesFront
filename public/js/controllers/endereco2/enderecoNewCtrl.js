angular.module("app").controller("endereco2NewCtrl", function ($scope,endereco2API,$location,locatarioId) {	
    
         $scope.locatarioId=locatarioId;
    
        $scope.adicionarEndereco = function (endereco) {
            endereco.user=locatarioId;			
            endereco2API.saveEndereco(endereco).success(function (data) {
                delete $scope.endereco;
                $scope.enderecoForm.$setPristine();
                $location.path("/endereco2/"+locatarioId);
            });
        };	
        
    });