angular.module("app").controller("imoveisNewCtrl", function (locadores,$scope,imoveisAPI,$location) {	
    $scope.locadores = locadores.data;
        $scope.adicionarImovel = function (imovel) {		
            imoveisAPI.saveImovel(imovel).success(function (data) {
                delete $scope.imovel;
                $scope.imovelForm.$setPristine();
                $location.path("/imoveis");
            });
        };	
        
    });