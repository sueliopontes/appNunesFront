angular.module("app").controller("rcNewCtrl", function ($scope,rcAPI,$location,locatarioId) {	
    
         $scope.locatarioId=locatarioId;
    
        $scope.adicionarRC = function (rc) {		
            rc.user=locatarioId;	
            rcAPI.saveRC(rc).success(function (data) {
                delete $scope.rc;
                $scope.rcForm.$setPristine();
                $location.path("/rc"+locatarioId);
            });
        };	
        
    });