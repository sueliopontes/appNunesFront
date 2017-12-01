angular.module("app").controller("imoveisNewCtrl", function ($scope,imoveisAPI,$location,locatarioId) {	
    
         $scope.locatarioId=locatarioId;	
    
        $scope.adicionarImoveis = function (imoveis) {
            imoveis.user=locatarioId;			
            imoveisAPI.saveImoveis(imoveis).success(function (data) {
                delete $scope.imoveis;
                $scope.imoveisForm.$setPristine();
                $location.path("/imoveis/"+locatarioId);
            });
        };	
        
    });