angular.module("app").controller("locatarioNewCtrl", function ($scope,pessoaAPI,$location) {	
    
        $scope.adicionarLocatario = function (locatario) {		
            locatario.user_tipo=1;            
            pessoaAPI.savePessoa(locatario).success(function (data) {                
                //delete $scope.locatario;
               // $scope.locatarioForm.$setPristine();
               // $location.path("/locatario");
                $location.path("/locatarioEdit/"+data.data.id);
            });
        };	
        
    });