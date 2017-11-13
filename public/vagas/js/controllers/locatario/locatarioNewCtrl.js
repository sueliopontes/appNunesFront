angular.module("app").controller("locatarioNewCtrl", function ($scope,locatarioAPI,$location) {	
    
        $scope.adicionarLocatario = function (locatario) {		
            locatarioAPI.saveLocatario(locatario).success(function (data) {
                delete $scope.locatario;
                $scope.locatarioForm.$setPristine();
                $location.path("/locatario");
            });
        };	
        
    });