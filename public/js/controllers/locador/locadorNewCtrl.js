angular.module("app").controller("locadorNewCtrl", function ($scope,locadorAPI,$location) {	
    
        $scope.adicionarLocador = function (locador) {		
            locadorAPI.saveLocador(locador).success(function (data) {
                delete $scope.locador;
                $scope.locadorForm.$setPristine();
                $location.path("/locador");
            });
        };	
        
    });