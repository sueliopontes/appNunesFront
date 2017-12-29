angular.module("app").controller("locadorNewCtrl", function ($scope,pessoaAPI,$location) {	
    
        $scope.adicionarLocador = function (locador) {	
            locador.user_tipo=2;  	
            pessoaAPI.savePessoa(locador).success(function (data) {
                //delete $scope.locador;
                //$scope.locadorForm.$setPristine();
                $location.path("/enderecoNew/"+data.data.id);
            });
        };	
        
    });

    