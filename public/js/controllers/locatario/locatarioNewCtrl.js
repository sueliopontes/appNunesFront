angular.module("app").controller("locatarioNewCtrl", function ($scope,locatarioAPI,$location) {	
    
        $scope.adicionarLocatario = function (locatario) {		
            locatarioAPI.saveLocatario(locatario).success(function (data) {
                console.log(data.data.id);
                //delete $scope.locatario;
                //$scope.locatarioForm.$setPristine();
               // $location.path("/locatario");
                $location.path("/enderecoNew/"+data.data.id);
            });
        };	
        
    });