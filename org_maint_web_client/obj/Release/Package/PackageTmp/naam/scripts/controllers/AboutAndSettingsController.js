(function () {
    var AboutAndSettingsController = function ($scope, $localStorage, Hub) {
        $scope.persistData = true;
        $localStorage.persistData = $scope.persistData;
        $scope.setPersistence = function () {
            if ($scope.persistData == true) {
                $localStorage.persistData = true;
            }
            else
            {
                $localStorage.persistData = false;
                Hub.clearCache();//do we need to be elaborate?
            };
        };
        $scope.setAutoDistribute = function () { 
     //       $localStorage.autoDistribute = $scope.autoDistribute ;
          
        };
        $scope.setAutoAllocate = function () {
     //       $localStorage.autoAllocate = $scope.autoAllocate;

        };
        $scope.clearCache  = function () {
            Hub.clearCache();
        }
    }
    AboutAndSettingsController.$inject =['$scope', '$localStorage', 'Hub'];
    angular.module('org_maint').controller('AboutAndSettingsController', AboutAndSettingsController)
}())