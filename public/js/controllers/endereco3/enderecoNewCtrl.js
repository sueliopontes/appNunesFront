angular.module("app").controller("endereco3NewCtrl", function ($scope,endereco3API,$location,locatarioId) {	
    
         $scope.locatarioId=locatarioId;
    
        $scope.adicionarEndereco = function (endereco) {
            endereco.user=locatarioId;			
            endereco3API.saveEndereco(endereco).success(function (data) {
                delete $scope.endereco;
                $scope.enderecoForm.$setPristine();
                $location.path("/endereco3/"+locatarioId);
            });
        };	
        
    });