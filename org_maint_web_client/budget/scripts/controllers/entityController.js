(function () {
    var EntityController = function ($scope, EntityService) {
        $scope.sortBy = 'DateUpdated';
        $scope.reverse = true;

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        GetAllRecords();
        //To Get All Records  
        function GetAllRecords() {
            var promiseGetEntityStatus = EntityService.getEntityStatus();
            promiseGetEntityStatus.then(function (entityStatusDb) { $scope.entityStatus = entityStatusDb.data; },
             function (errorPl) {
                 //   $log.error('Some Error in Getting Records.', errorPl);
             });
            var promiseGetEntityList = EntityService.getEntitiesList();
            promiseGetEntityList.then(function (entityListDb) { $scope.entityList = entityListDb.data; },
             function (errorPl) {
                 //   $log.error('Some Error in Getting Records.', errorPl);
             });
        }
        $scope.save = function () {
            var Contributor = {
                ContributorName: $scope.ContributorName,
                OriginalCurrencyAmount: $scope.OriginalCurrencyAmount,
                Currency: $scope.Currency
                // will add date later
            };
            alert($scope.ContributorName);
            alert(Contributor.ContributorName);
            var promisePost = EntityService.post(Contributor);
            promisePost.then(function (pl) {
                $scope.ContributorID = pl.data.ContributorID;
                GetAllRecords();

                //   ClearModels();
            }, function (err) {
                console.log("Some error Occured" + err);
            });
        };
    };



    EntityController.$inject = ['$scope', 'EntityService'];

    angular.module('org_maint_budget')
      .controller('EntityController', EntityController);

}());