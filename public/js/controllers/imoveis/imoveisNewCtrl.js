angular.module("app").controller("imoveisNewCtrl", function ($scope,imoveisAPI,$location) {	
    
        $scope.adicionarImovel = function (imovel) {		
            imoveisAPI.saveImovel(imovel).success(function (data) {
                delete $scope.imovel;
                $scope.imovelForm.$setPristine();
                $location.path("/imoveis");
            });
        };	
        
    });