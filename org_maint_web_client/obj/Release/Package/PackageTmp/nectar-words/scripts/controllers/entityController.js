(function () {
    var EntityController = function ($scope, EntityService, connectToService) {
        $scope.sortBy = 'DateUpdated';
        $scope.reverse = true;

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        GetAllRecords();
        //To Get All Records  
        function GetAllRecords() {
            if (connectToService == 'true') {
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
            else
            {
                $scope.entityStatus = EntityService.getEntityStatus();
                $scope.entityList = EntityService.getEntitiesList();
            }
        }
        $scope.addEntity = function () {
             var Entity = {
                EntityName: $scope.EntityName,
                BudgetAllocated: $scope.BudgetAllocated,
                BudgetRequired: $scope.BudgetRequired,
                Priority: $scope.Priority,
                 Comments:$scope.Comments
            // will add date later
            };
             if (connectToService == 'true') {
                 var promisePost = EntityService.addEntity(Entity);
                 promisePost.then(function (pl) {
                     $scope.EntityBudgetPriorityID = pl.data.EntityBudgetPriorityID;
                     GetAllRecords();

                     //   ClearModels();
                 }, function (err) {
                     console.log("Some error Occured" + err);
                 });
             }
             else
             {
                 EntityService.addEntity(Entity);
                 GetAllRecords();
             }
        };
    };



    EntityController.$inject = ['$scope', 'EntityService','connectToService'];

    angular.module('nectar_words_app')
      .controller('EntityController', EntityController);

}());