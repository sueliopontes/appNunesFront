angular.module("app").controller("imoveisNewCtrl", function ($scope,imoveisAPI,$location) {	
    
        $scope.adicionarImoveis = function (imoveis) {		
            imoveisAPI.saveImoveis(imoveis).success(function (data) {
                delete $scope.imoveis;
                $scope.imoveisForm.$setPristine();
                $location.path("/imoveis");
            });
        };	
        
    });