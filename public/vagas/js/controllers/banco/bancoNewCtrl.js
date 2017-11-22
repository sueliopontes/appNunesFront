angular.module("app").controller("bancoNewCtrl", function ($scope,bancoAPI,$location,locatarioId) {	
    
         $scope.locatarioId=locatarioId;	
    
        $scope.adicionarBanco = function (banco) {
            banco.user=locatarioId;			
            bancoAPI.saveBanco(banco).success(function (data) {
                delete $scope.banco;
                $scope.bancoForm.$setPristine();
                $location.path("/banco/"+locatarioId);
            });
        };	
        
    });