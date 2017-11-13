angular.module("app").controller("bancoNewCtrl", function ($scope,bancoAPI,$location) {	
    
        $scope.adicionarBanco = function (banco) {		
            bancoAPI.saveBanco(banco).success(function (data) {
                delete $scope.banco;
                $scope.bancoForm.$setPristine();
                $location.path("/banco");
            });
        };	
        
    });